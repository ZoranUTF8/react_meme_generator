import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import memesData from "../../assets/memesData/memesData";
import ImageContainer from "../imageContainer/ImageContainer";

const Search = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl:
      "https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomNumber].url;
    setMeme((prevValues) => ({ ...prevValues, imageUrl: imgUrl }));
  };

  return (
    <main>
      <Container className="mt-3">
        <Form>
          <Row>
            <Col md={6}>
              <InputGroup className="mb-2">
                <Form.Control
                  placeholder="First text"
                  aria-label="FirstText"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup className="mb-2">
                <Form.Control
                  placeholder="Second text"
                  aria-label="SecondText"
                  aria-describedby="basic-addon1"
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
          <Col className="mt-3 ">
            <ImageContainer {...meme} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Search;
