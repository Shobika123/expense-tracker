import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../../store/authReducer";


const Header = () => {
  const isLoggedin = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  

 
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <ul>
        
        <li>
          <NavLink activeClassName={classes.active} to="/expenses">
            
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/auth">
            
          </NavLink>
        </li>
        <li>
          {isLoggedin && (
            <button onClick={logoutHandler}>Logout</button>
          )}
        </li>
      </ul>
     
    </header>
  );
};
export default Header;