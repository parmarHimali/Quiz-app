import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizList from "./component/QuizList";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <QuizList />
      </div>
    </div>
  );
}

export default App;
