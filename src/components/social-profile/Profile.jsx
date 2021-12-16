import PropTypes from "prop-types";
import {
  Container,
  Description,
  Avatar,
  Username,
  Tag,
  List,
  Item
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <p className="location">{location}</p>
      </Description>
      <List>
        <Item>
          <span className="label">Followers</span>
          <Username className="quantity">{stats.followers}</Username>
        </Item>
        <Item>
          <span className="label">Views</span>
          <Username className="quantity">{stats.views}</Username>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <Username className="quantity">{stats.likes}</Username>
        </Item>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
