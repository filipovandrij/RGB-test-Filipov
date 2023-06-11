import Main from "./container/main/Main";
import Header from "./container/header/Header";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <div className="big_ellipse"></div>
      <div className="small_ellipse"></div>
    </div>
  );
}

export default App;
