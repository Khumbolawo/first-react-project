//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";

import button from "./components/Button";

//code to import message function into app function, then export app for
//use elsewhere
function App() {
  //let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

  //const handleSelectItem = (item: string) => {
  //console.log(item);
  //};
  return (
    <div>{button()}</div>
    //<div>
    //<ListGroup
    //items={items}
    //heading="Cities"
    //onSelectItem={handleSelectItem}
    ///>
    //</div>

    //<div>
    //<Alert> "Hello World" </Alert>
    //</div>
  );
}

//thise code prints hello world on our react webpage
export default App;
