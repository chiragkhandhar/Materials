/**
 * @class App
 * @classdesc This is the main app component where all the views and components are loaded.
 * @requires {@link Materials}
 * @author Chirag Khandhar
 * @hideconstructor
 * @example
 *  return (
    <div className="App">
      <Materials />
    </div>
  );
 */
import "./App.css";

import { Materials } from "./Components/Materials";

const App = () => {
  return (
    <div className="App">
      <Materials />
    </div>
  );
};

export default App;
