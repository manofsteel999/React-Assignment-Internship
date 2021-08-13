import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/app/login/:id" component={LoginScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
