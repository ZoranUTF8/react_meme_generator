import { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ImageContainer from "../imageContainer/ImageContainer";
import useGetMemesHook from "./useGetMemesHook";
import { useReactToPrint } from "react-to-print";
import Loading from "../Loading/Loading";

const Search = ({ darkMode }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { isLoading, memes, error } = useGetMemesHook();

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl:
      "https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const memesArray = memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomNumber].url;
    setMeme((prevValues) => ({ ...prevValues, imageUrl: imgUrl }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setMeme((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  if (isLoading) <Loading />;

  return (
    <main ref={componentRef} className={darkMode ? "darkSearch" : ""}>
      <Button
        variant="success mt-3"
        type="submit"
        className="w-50 no-print-area "
        onClick={handlePrint}
      >
        Print this out!
      </Button>
      <Container className="mt-3" rref={(el) => (this.componentRef = el)}>
        <Form className="no-print-area">
          <Row>
            <Col md={6}>
              <InputGroup className="mb-2">
                <Form.Control
                  placeholder="First text"
                  aria-label="FirstText"
                  aria-describedby="basic-addon1"
                  value={meme.topText}
                  name="topText"
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup className="mb-2">
                <Form.Control
                  placeholder="Second text"
                  aria-label="SecondText"
                  aria-describedby="basic-addon1"
                  value={meme.bottomText}
                  name="bottomText"
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
            <Col md={12}>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                onClick={handleSubmit}
              >
                Get a new meme image
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col className="mt-3 mb-5">
            <div className="meme search-print">
              <ImageContainer {...meme} />
              <img src={meme.randomImage} className="meme--image" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Search;
