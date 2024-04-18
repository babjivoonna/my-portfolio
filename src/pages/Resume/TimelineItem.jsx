

const TimelineItem = ({ title, date, id,description }) => {
  return (
    <li className="timeline-item">
      <h2 className="h4 timeline-item-title">{title}</h2>
      <h4 className="h4 timeline-item-title">{id}</h4>

      <span>{date}</span>
      <p className="timeline-text">{description}</p>
    </li>
  );
}

export default TimelineItem;