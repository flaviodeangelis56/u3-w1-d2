import Card from "react-bootstrap/Card";
import books from "../books/horror.json";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {books.map((book, i) => (
            <Col xs={4} className="mb-5">
              <Card key={`book-${i}`} style={{ minHeight: "664px" }}>
                <Card.Img variant="top" src={book.img} style={{ height: "550px" }} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>

                  <Card.Text>
                    <Row>
                      <Col xs={4}>{book.category}</Col>
                      <Col xs={4}>{book.price}</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
