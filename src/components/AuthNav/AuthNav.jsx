import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';


const AuthNav = () => {
    return (
        <div className={css.nav}>
            <NavLink to="/register">
                Register
            </NavLink>
            <NavLink to="/login">
                Log In
            </NavLink>
        </div>
    );
};

export default AuthNav;
