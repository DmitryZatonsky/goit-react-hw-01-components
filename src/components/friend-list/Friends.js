import PropTypes from "prop-types";

const Friends = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name-friends">{name}</p>
    </div>
  );
};

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;
