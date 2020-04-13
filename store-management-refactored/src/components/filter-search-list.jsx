import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FiltreSearch = () => {
  const items = ["apples", "mango", "strawberry", "kiwi", "melon", "lemon"];

  // ===============================
  // Hooks
  // ===============================

  const [search, setSearch] = useState("");

  // ===============================
  // Helpers
  // ===============================

  function filterList(event) {
    if (event.target.value && event.target.value.length > 0) {
      setSearch(event.target.value);
    }
  }

  // ===============================

  let filteredItems = updatedList.filter(function (item) {
    return item.toLowerCase().includes(search);
  });

  return (
    <div className="FiltreSearch">
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
    </div>
  );
};

// List Component
// const List = props => {
//   return (
//     <div className="List">
//       {props.filteredItems &&
//         props.filteredItems.length === 0 &&
//         props.items.map(function(item) {
//           return (
//             // <Button
//             //   className="custom_filterBtn"
//             //   variant="danger"
//             //   data-category={item}
//             //   key={item}
//             // >
//             //   {item}
//             // </Button>
//             <div className="lists">
//               <h1>{item}</h1>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

export default FiltreSearch;
