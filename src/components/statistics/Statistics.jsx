import PropTypes from "prop-types";
import {
  Container,
  Title,
  List,
  Item,
  Label,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  console.log();
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map((stat) => (
          <Item key={stat.id}>
            <Label>{stat.label}</Label>
            <span className="percentage">{stat.percentage}%</span>
          </Item>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  // stats: PropTypes.string,
  // id:
  // label:
  // percentage:
};

export default Statistics;
