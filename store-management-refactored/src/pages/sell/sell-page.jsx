import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./sell-page.css";
import Mango from "../../assets/img/mango.png";
import Pineapple from "../../assets/img/pineapple.png";
import Apple from "../../assets/img/apple.png";
import Pomegranate from "../../assets/img/pomegranate.png";
import Toggle from "../../components/toggle";
import FiltreSearch from "../../components/filter-search-products";
import Report from "../report/report-page";
import SelectedProducts from "../../components/selected-products";

const SellPage = (props) => {
  const [addClass, setaddClass] = useState(false);

  const hoverOn = (e) => {
    setaddClass(true);
    // e.target.style.backgroundColor = "rgb(4, 48, 48)";
    e.target.style.backgroundColor = "rgb(10, 109, 109)";
  };

  const hoverOff = (e) => {
    setaddClass(false);
    e.target.style.backgroundColor = "";
  };

  const products = [
    {
      id: 1,
      name: "Mango Juice",
      price: 50,
      img: Mango,
      quantity: 1,
    },
    {
      id: 2,
      name: "Pineapple juice",
      price: 60,
      img: Pineapple,
      quantity: 1,
    },
    {
      id: 3,
      name: "Apple Juice",
      price: 30,
      img: Apple,
      quantity: 1,
    },
    {
      id: 4,
      name: "Pomegrenate Juice",
      price: 30,
      img: Pomegranate,
      quantity: 1,
    },
  ];

  const incrementBtn = (index) => {
    let newProduct = [...product];
    newProduct[index].quantity = newProduct[index].quantity + 1;
    setProduct(newProduct);
  };
  const decrementBtn = (index) => {
    console.log("product index ", index);
    console.log("product detail ", product);
    console.log("...product detail ", [...product]);
    let newProduct = [...product];
    console.log("new product is ", newProduct);
    newProduct[index].quantity = newProduct[index].quantity - 1;
    setProduct(newProduct);
  };

  const [product, setProduct] = useState([]);

  const SelectProduct = (selectedProduct) => {
    // check if "product" contains selectedProduct
    const productExists = product.filter(
      (product) => product.name === selectedProduct.name
    );
    // if yes, then increase qty
    if (productExists.length >= 1) {
      // put the object to the Product with increased quantity
      const restOfProducts = product.filter(
        (product) => product.name !== selectedProduct.name
      );

      setProduct(
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
      setProduct([...product, { ...selectedProduct }].reverse());
    }
  };

  let totalQuantity = 0;
  let totalPrice = 0;
  let tax = 5;
  product.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.price;
  });
  totalPrice = totalPrice + (tax / 100) * totalPrice;
  // console.log("total qty ", totalQuantity);
  // console.log("total pricce ", totalPrice);

  let orders = [...product];

  // SelectedProduct component

  return (
    <div>
      <div className="container">
        <h2>{props.hello}</h2>
        <div className="row justify-content-center align-items-center text-center pt-3">
          <div className="col-md-6">
            <h2>Selected Items</h2>
            <div className="item_container mt-5">
              <ul className="item_list">
                <SelectedProducts
                  product={product}
                  incrementBtn={incrementBtn}
                  decrementBtn={decrementBtn}
                />
              </ul>
            </div>
            <hr className="mt-5"></hr>
          </div>
          <div className="col-md-1 vertical_divider"></div>

          <div className="col-md-5 popular_items_section">
            <h2>
              <span>⭐</span>Popular Items
            </h2>
            <div className="popular_items_container">
              {products.map((product) => (
                <Card
                  style={{
                    width: "50rem",
                    height: "13.5rem",
                    marginLeft: "0.6rem",
                    cursor: "pointer",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={product.img}
                    onMouseOver={hoverOn}
                    onMouseLeave={hoverOff}
                    onClick={(e) => SelectProduct(product)}
                    // style={{ cursor: "pointer" }}
                  />
                  <Card.Body key={product.id}>
                    <Card.Title
                      style={{ fontSize: "0.9rem" }}
                      value={product.name}
                      onClick={(e) => SelectProduct(product)}
                    >
                      {product.name}
                    </Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Tk. {product.price}</ListGroupItem>
                  </ListGroup>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Toggle />
          </div>
          <div className="col-md-3">
            <h5>Tax : {tax} %</h5>
            <h5>Sub total : Tk {totalPrice}</h5>
          </div>
          <div className="col-md-1 vertical_divider"></div>
          <div className="col-md-5 filter_search_container">
            <FiltreSearch />
          </div>
        </div>
      </div>
      <Report
        arr={orders}
        vat={tax}
        total_Quantity={totalQuantity}
        total_Price={totalPrice}
      />
    </div>
  );
};

export default SellPage;
