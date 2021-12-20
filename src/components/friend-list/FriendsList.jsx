import Friends from "./Friends";
import PropTypes from "prop-types";
import {
  List,
  Item,
} from './Friends.styled';

function FriendsList({ friends }) {
  return (
    <List>
      {friends.map((friend) => (
        <Item key={friend.id}>
          <Friends
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Item>
      ))}
    </List>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
