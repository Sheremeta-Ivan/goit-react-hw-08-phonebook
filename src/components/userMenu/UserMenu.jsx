import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { UserTitle } from './UserMenu.styles';
import { Avatar } from '@chakra-ui/react';
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserTitle>
      <Avatar src="https://bit.ly/broken-link" />
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </UserTitle>
  );
};

export default UserMenu;
