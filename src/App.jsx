import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./MyComponents/MyNavBar";
import MyFooter from "./MyComponents/MyFooter";
import MyJumbotron from "./MyComponents/MyJumbotron";
import AllTheBooks from "./MyComponents/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNavBar />

      <MyJumbotron />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
