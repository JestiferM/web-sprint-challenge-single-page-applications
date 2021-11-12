import React, {useState} from "react";
import { Route, Link } from "react-router-dom";

import Form from "./components/pizza-form";

const initialEntries = {
 entires:'',
 size:'',
 checked:false,
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
        <Form entries={entries} />
      </Route>
      </div>
      <div>
      <p>Your favorite food delivered while coding</p>
      <button>Pizza?</button>
      </div>
    </>
  );
};

export default App;
