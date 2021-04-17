
import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Gridview from "./Gridview";
import Listview from "./Listview";
import data from "./MOCK_DATA (1).json";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const filteredArray = data.filter((item) => {
    if (inputVal === "") return item;
    else if (item.title.toLowerCase().includes(inputVal.toLowerCase()))
      return item;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header inputVal={inputVal} handleChange={(e) => handleChange(e)} />
        <Switch>
          <Route exact path="/">
            <div className="body">
              {filteredArray.length > 0 || inputVal === "" ? (
                filteredArray.map((item) => <Listview item={item} />)
              ) : (
                <h4>No data found</h4>
              )}
            </div>
          </Route>
          <Route exact path="/grid">
            <div className="body_grid">
              {filteredArray.length > 0 ? (
                filteredArray.map((item) => <Gridview item={item} />)
              ) : (
                <h4>No data found</h4>
              )}
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
