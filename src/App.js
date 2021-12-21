import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

import NotFound from './Pages/NotFound/NotFound'
import AddReview from './Pages/AddReview/AddReview'
import Order from './Pages/Order/Order';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AllProducts from './Pages/AllProducts/AllProducts';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/all-products">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/products">
              
            </Route>
            <PrivateRoute path="/order/:orderId">
              <Order></Order>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/logout">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/add-products">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/add-reviews">
              <AddReview></AddReview>
            </PrivateRoute>
            {/* <PrivateRoute path="/add-reviews">
              <Add
            </PrivateRoute> */}
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/manage-products">
              <ManageProduct></ManageProduct>
            </PrivateRoute>
            
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route  path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
