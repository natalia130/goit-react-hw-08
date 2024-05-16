import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={css.menu}>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Log Out
            </button>
        </div>
    );
};
export default UserMenu;