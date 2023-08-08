import {
  StatsSection,
  StatsItem,
  StatsList,
  StatsLabel,
} from './statistics.style';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ stats, title }) => {
  return (
    <StatsSection>
      {title && <h2 style={{ color: 'white' }}>{title}</h2>}
      <StatsList>
        {stats.map(item => (
          <StatsItem key={item.id} color={getRandomHexColor()}>
            <StatsLabel>{item.label}</StatsLabel>
            <span>{item.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
