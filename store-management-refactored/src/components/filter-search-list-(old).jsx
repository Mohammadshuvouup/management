import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FiltreSearch = () => {
  const [items, setItems] = useState([
    "apples",
    "mango",
    "strawberry",
    "kiwi",
    "melon",
    "lemon"
  ]);

  const [filteredItems, setFilteredItems] = useState([]);

  const filterList = e => {
    let updatedList = items;
    if (e.target.value === "") {
      setFilteredItems([]);
    } else {
      updatedList = updatedList.filter(function(item) {
        console.log(
          "matched ",
          item,
          " with ",
          e.target.value,
          "to ",
          item.toLowerCase().includes(e.target.value)
        );
        return item.toLowerCase().includes(e.target.value);
      });
      console.log("updated list is ", updatedList);
      // setFilteredItems({updatedList}); // setFilteredItems({updatedList: ['apples']})
      setFilteredItems(updatedList); //// setFilteredItems(['apples'])
      console.log("updated filtered list is ", filteredItems);
    }
  };
  const List = props => {
    return (
      <>
        {props.filteredItems &&
          props.filteredItems.length === 0 &&
          props.items.map(function(item) {
            return (
              <Button
                className="custom_filterBtn"
                variant="danger"
                data-category={item}
                key={item}
              >
                {item}
              </Button>
            );
          })}
        {props.filteredItems &&
          props.filteredItems.length > 0 &&
          props.filteredItems.map(function(item) {
            return (
              <Button
                className="custom_filterBtn"
                variant="danger"
                data-category={item}
                key={item}
              >
                {item}
              </Button>
            );
          })}
      </>
    );
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
        {/* <Button variant="danger" className="custom_filterBtn">Juice</Button>
              <Button variant="danger" className="custom_filterBtn">Breakfast</Button>
              <Button variant="danger" className="custom_filterBtn">Lunch</Button>
              <Button variant="danger" className="custom_filterBtn">Snacks</Button> */}
        <List items={items} filteredItems={filteredItems} />
      </div>
    </>
  );
};

export default FiltreSearch;
