import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./AddExpense";
import Approver from "./Approver";
import Expense from "./Expense";
import Expenses from "./Expenses";



const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<AddExpense/>} />
          <Route exact path = "/expenses" element = {<Expenses/>} />
          <Route exact path = "/expenses/expense" element = {<Expense/>} />
          <Route exact path = "/approver" element = {<Approver/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
