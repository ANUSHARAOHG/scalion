import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Pages from "./pages/";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Products from "./pages/table/Products";
import Addproducts from "./pages/Addproducts";

import Addsettings from "./pages/Addsettings";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgot-password";

import Settings from "./pages/table/Settings";

import Shipping from "./pages/table/Shipping";

import Addshipping from "./pages/Addshipping";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Pages} />

          <Route path="/addsettings" component={Addsettings} />

          <Route path="/products" component={Products} />

          <Route path="/addproducts" component={Addproducts} />

          <Route path="/settings" component={Settings} />

          <Route path="/register" component={Register} />

          <Route path="/login" component={Login} />

          <Route path="/shipping" component={Shipping} />

          <Route path="/addshipping" component={Addshipping}/>

          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
