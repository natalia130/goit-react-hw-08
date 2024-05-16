import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChangeSearch = (event) => {
        dispatch(changeFilter(event.target.value));
    }

    return (
        <div className={css.search}>
            <p>Find contact by name</p>
            <input type="text" name="search" placeholder='Search...' value={filter} onChange={handleChangeSearch} />
        </div>
    );
};

export default SearchBox;