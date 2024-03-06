//creating listgroup component as function
//uses items.map to list cities dynamically from a variable items

import { useState } from "react";

//using conditionals in parantheses lets you display content dynamically
function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];
  //below is a hook. function that allows us to tap into react state
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List of Cities</h1>
      {items.length === 0 && <p>No cities to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //below is a function that lets us highlight selected items in list
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
//exporting function to be accessed by rest of app
export default ListGroup;
