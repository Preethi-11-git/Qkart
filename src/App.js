import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login"
export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    
    <div className="App">
          <Switch>
              <Route path="/login"><Login/></Route>
              <Route path="/register"><Register/></Route>
              <Route path="/"><Products/></Route>
            </Switch>
            
    </div>
   
  );
}

export default App;
