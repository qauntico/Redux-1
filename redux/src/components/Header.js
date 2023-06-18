import classes from './Header.module.css';
import { authActions } from '../store';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  function changeState(){
    dispatch(authActions.logout())
  }
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isAuthenticated &&
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={changeState} >Logout</button>
          </li>
        </ul>
      </nav>
      }
      
    </header>
  );
};

export default Header;
