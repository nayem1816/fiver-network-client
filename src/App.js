import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Shared/Navbar/Navbar";
import Book from "./components/Dashboard/Book/Book";
import OrderList from "./components/Admin/OrderList/OrderList";
import AddService from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./components/Admin/ManageService/ManageService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import Review from "./components/Dashboard/Review/Review";

export const userContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="open-sans">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin/orderList">
              <OrderList></OrderList>
            </PrivateRoute>
            <PrivateRoute path="/admin/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/admin/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/admin/manageService">
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/book/:id">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/book">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/bookingList">
              <BookingList></BookingList>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/review">
              <Review></Review>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
