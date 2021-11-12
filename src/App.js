import React, {useState} from "react";
import { Route, Link } from "react-router-dom";

import Pizza from "./components/pizza-form";

const initialEntries = {
  itemName: 'Jessy-M',
  age:24,
  posts: []

}


const App = () => {

  const [entries, setEntries] = useState(initialEntries);

  return (
    <>
      <h1>Lambda Eats Pizza Menu</h1>
      <div>
      <nav> 
        <Link to='/'>Home</Link>
        <Link to='/Pizza'>Order-Pizza</Link>
      </nav>
      <Route path='/Pizza'>
        <Pizza entries={entries} />
      </Route>
      </div>
      <p>You can remove this code and create your own header</p>
    </>
  );
};

export default App;
