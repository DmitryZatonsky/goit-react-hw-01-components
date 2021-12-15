import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  console.log();
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map((stat) => (
          <li key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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
