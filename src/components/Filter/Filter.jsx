import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </label>
  );
};
