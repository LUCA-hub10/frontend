import { Route, Routes } from "react-router-dom";
import Navb from "./Components/Navb";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ClientProfile from "./Pages/Client/ClientProfile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "./Redux/Actions/ClientActions";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (token) {
      dispatch(current())
    }

  }, [dispatch, token])
  
  return (
    <div>
      <Navb />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/account' element={<ClientProfile />} />
      <Route path='/productPage' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
