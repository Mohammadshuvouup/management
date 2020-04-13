import React from "react";
// import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./styles/list.css";

const List = (props) => {
  function SelectProduct(selectedProduct) {
    // check if "product" contains selectedProduct
    const productExists = props.product.filter(
      (product) => product.name === selectedProduct.name
    );
    // if yes, then increase qty
    if (productExists.length >= 1) {
      // put the object to the Product with increased quantity
      const restOfProducts = props.product.filter(
        (product) => product.name !== selectedProduct.name
      );

      props.setProduct(
        [
          ...restOfProducts,
          {
            ...productExists[0],
            quantity: parseInt(productExists[0].quantity) + 1,
          },
        ].reverse()
      );
    } else {
      // add that in Product
      props.setProduct([...props.product, { ...selectedProduct }].reverse());
    }
  }

  return (
    <div className="List">
      {props.filteredItems &&
        props.filteredItems.length > 0 &&
        props.filteredItems.map(function (item) {
          return (
            <div className="List-Card" onClick={(e) => SelectProduct(item)}>
              <div className="List-Image">
                <img src={item.img} alt="" />
              </div>
              <p>{item.name}</p>
              <hr />
              <p>Tk. {item.price}</p>
            </div>
            // <Card
            //   style={{
            //     flexBasis: "10rem",
            //     // height: "100px",
            //     marginLeft: "0.6rem",

            //     cursor: "pointer"
            //   }}
            //   key={item.id}
            //   onClick={e => SelectProduct(item)}
            // >
            //   <Card.Img variant="top" src={item.img} />
            //   <Card.Body>
            //     {/* <Card.Title>{item.name}</Card.Title> */}
            //     <p>{item.name}</p>
            //     <ListGroup className="list-group-flush">
            //       <ListGroupItem>Tk. {item.price}</ListGroupItem>
            //     </ListGroup>
            //   </Card.Body>
            // </Card>
          );
        })}
    </div>
  );
};
export default List;
