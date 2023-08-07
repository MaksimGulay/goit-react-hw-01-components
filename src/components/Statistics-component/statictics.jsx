import {
  StatsSection,
  StatsItem,
  StatsList,
  StatsLabel,
} from './statistics.style';

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
