import React,{useContext} from "react";
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {count}=useContext(CartContext)
  const {isAuth,logout}=useContext(AuthContext)
  const navigate=useNavigate()
  const handlelogin=()=>{
      if(isAuth){
          logout()
          navigate("/")
      }
      else{
          navigate("/Login")
      }
    }
  return (
    <div data-cy="navbar" style={{display:"flex",gap:"18%",paddding:"9px" ,backgroundColor:"greben", height:"70px",marginTop:"30px", }}>
      <Link data-cy="navbar-home-link" to="">Home</Link>
      <Link data-cy="navbar-home-link" to="/Product">Product</Link>
      <span data-cy="navbar-cart-items-count">total item:{count}</span>
      <button data-cy="navbar-login-logout-button" onClick={handlelogin}>{isAuth?"logout":"login"}</button>
    </div>
  );
};

export default Navbar;
