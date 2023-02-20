import logo from "./logo.svg";
import Head from "./components/Head";
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
