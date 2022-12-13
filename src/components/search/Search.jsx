import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import memesData from "../../assets/memesData/memesData";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    console.log(url);
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
      </Container>
    </main>
  );
};

export default Search;
