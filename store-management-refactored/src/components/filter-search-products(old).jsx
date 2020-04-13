import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Mango from "../assets/mango.png";
import Apple from "../assets/apple.png";
import SelectedProducts from "./selected-products";

const FiltreSearch = props => {
  const products = [
    {
      id: 5,
      name: "Strawberry Juice",
      price: 50,
      img: Mango,
      quantity: 1
    },
    {
      id: 6,
      name: "Lemon juice",
      price: 60,
      img: Apple,
      quantity: 1
    },
    {
      id: 7,
      name: "Kiwi juice",
      price: 60,
      img: Mango,
      quantity: 1
    }
    // {
    //   id: 8,
    //   name: "Melon juice",
    //   price: 60,
    //   img: Apple,
    //   quantity: 1
    // },
    // {
    //   id: 9,
    //   name: "Kiwi juice",
    //   price: 60,
    //   img: Mango,
    //   quantity: 1
    // },
    // {
    //   id: 10,
    //   name: "Melon juice",
    //   price: 60,
    //   img: Apple,
    //   quantity: 1
    // }
  ];
  // const [filteredItems, setFilteredItems] = useState([]);
  const [product, setProduct] = useState([]);

  const filterList = e => {
    let updatedList = [...products];

    console.log("product list is ", updatedList);

    if (e.target.value === "") {
      setFilteredItems([]);
    } else {
      updatedList = updatedList.filter(function(item) {
        console.log(
          "matched ",
          item.name,
          " with ",
          e.target.value,
          "to ",
          item.name.toLowerCase().includes(e.target.value)
        );
        return item.name.toLowerCase().includes(e.target.value);
      });
      console.log("updated list is ", updatedList);
      // setFilteredItems({updatedList}); // setFilteredItems({updatedList: ['apples']})
      setFilteredItems(updatedList);
      setProduct(filteredItems);

      // setProduct(updatedList); //// setFilteredItems(['apples'])
      console.log("updated filtered list is ", filteredItems[0]);
    }
  };
  const List = props => {
    return (
      <>
        {props.filteredItems &&
          props.filteredItems.length === 0 &&
          props.items.map(function(item) {
            return (
              <Card
                style={{
                  width: "18rem",
                  marginLeft: "0.6rem",
                  cursor: "pointer"
                }}
                key={item.id}
                onClick={e => SelectProduct(item)}
              >
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Tk. {item.price}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            );
          })}
        {props.filteredItems &&
          props.filteredItems.length > 0 &&
          props.filteredItems.map(function(item) {
            return (
              <Card
                style={{
                  width: "18rem",
                  marginLeft: "0.6rem",
                  cursor: "pointer"
                }}
                key={item.id}
                onClick={e => SelectProduct(item)}
              >
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Tk. {item.price}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            );
          })}
      </>
    );
  };

  const incrementBtn = index => {
    let newProduct = [...product];
    newProduct[index].quantity = newProduct[index].quantity + 1;
    setProduct(newProduct);
  };
  const decrementBtn = index => {
    console.log("product index ", index);
    console.log("product detail ", filteredItems);
    console.log("...product detail ", [...filteredItems]);
    let newProduct = [...product];
    console.log("new product is ", newProduct);
    newProduct[index].quantity = newProduct[index].quantity - 1;
    setProduct(newProduct);
  };

  const SelectProduct = selectedProduct => {
    // check if "product" contains selectedProduct
    const productExists = product.filter(
      product => product.name === selectedProduct.name
    );
    // if yes, then increase qty
    if (productExists.length >= 1) {
      // put the object to the Product with increased quantity
      const restOfProducts = product.filter(
        product => product.name !== selectedProduct.name
      );

      setProduct(
        [
          ...restOfProducts,
          {
            ...productExists[0],
            quantity: parseInt(productExists[0].quantity) + 1
          }
        ].reverse()
      );
    } else {
      // add that in Product
      setProduct([...product, { ...selectedProduct }].reverse());
    }
  };

  return (
    <>
      <h5>Search your item</h5>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        onChange={filterList}
      ></input>
      <div className="filter_list">
        <List items={products} filteredItems={filteredItems} />
      </div>
      <div className="item_container mt-5">
        <ul className="item_list">
          <SelectedProducts
            product={product}
            incrementBtn={incrementBtn}
            decrementBtn={decrementBtn}
          />
        </ul>
      </div>
    </>
  );
};

export default FiltreSearch;
