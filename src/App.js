
import { BrowserRouter, Navigate, Routes, Route, Switch } from "react-router-dom";
import './App.css';
import StorePage from "webpages/StorePage";
import LoginPage from "webpages/LoginPage";
import MyCart from "webpages/MyCart";
import Adminpage from "webpages/Adminpage";
import Productpage from "webpages/ProductPage";
import Orderpage from "webpages/Orderpage";
import Contactus from "webpages/Contactus";
import Outofstock from "webpages/Outofstock";

import Payment from "webpages/Payment";
import Account from "webpages/Account";
import PaymentFailed from "webpages/PaymentFailed";

export const URL = process.env.SERVER_URL;

//export const URL = "http://localhost:6001";

function App() {

  

  const mode = "dark"

  

  return (
    <div className="App">

<BrowserRouter>



          

  <Routes>

    <Route path="/" element={<StorePage/>} />

    <Route
      path="/login"
      element={<LoginPage />}
    />

    <Route
      path="/cart"
      element={<MyCart /> }
    />

    <Route path="/payment" element={<Payment />} />
    <Route path="/account" element={<Account />} />
    <Route path="/contactus" element={<Contactus />} />

    <Route path="/cancel" element={<PaymentFailed />} />
    <Route path="/admin" element={<Adminpage />} />
    <Route path="/productpage/:_id/:name/:price/:rating" element={<Productpage />} />
    <Route path="/orders" element={<Orderpage />} />
    <Route path="/outofstock" element={<Outofstock />} />

  </Routes>



</BrowserRouter>
     
    </div>
  );
}

export default App;
