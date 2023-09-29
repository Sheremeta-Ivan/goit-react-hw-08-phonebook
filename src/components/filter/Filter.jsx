import { useDispatch } from 'react-redux';
import { FilterLabel } from './Filter.styles';
import { setFilterContacts } from '../../redux/filter/slice';
import { Text } from './Filter.styles';
export function Filter() {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <>
      <Text>Contacts</Text>
      <FilterLabel>
        Find contact by the name
        <input type="text" name="filter" onChange={handlerFilter} />
      </FilterLabel>
    </>
  );
}
