import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Image image={product.image} />
      <Card.Body>
        <Name name={product.name} />
        <Price price={product.price} />
        <Description description={product.description} />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
