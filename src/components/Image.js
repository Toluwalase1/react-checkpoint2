import { Card } from "react-bootstrap";

const Image = ({ image }) => (
  <Card.Img variant="top" src={image} alt="product" />
);

export default Image;
