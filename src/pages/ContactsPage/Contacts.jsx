import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { fetchContacts } from '../../redux/contacts/operations';
import { ContactList } from 'components/contacts/ContactList';
import { Filter } from 'components/filter/Filter';
import ContactForm from 'components/form/ContactForm';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />

      <Filter />
      {isLoading && !error && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="teal"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
