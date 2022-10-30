import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ExpenseState from "./context/expenses/ExpenseState";


const App = () => {
  return (
    <div className="App">
      <ExpenseState>
        <Navbar />
        <Home />
      </ExpenseState>
    </div>
  );
};

export default App;
