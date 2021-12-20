import PropTypes from "prop-types";
import {
  Card,
  Status,
  Img,
  FriendName,
} from './Friends.styled';

const Friends = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      <Status Stat = {isOnline}></Status>
      <Img src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </Card>
  );
};

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friends;
