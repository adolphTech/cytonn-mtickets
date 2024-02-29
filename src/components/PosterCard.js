import React from 'react';
import './PosterCard.css';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PosterCard = ({ imgLink, title, location, date ,id}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="poster-card">
        <div className="poster-container mt-5">
          <div className="poster-date">{date}</div>
          <div>
            <Image src={imgLink} alt="poster" fluid className="poster-image" />
          </div>
        </div>

        <div className="pt-4">
          <h4 className="poster-title ">{title}</h4>
          <h5 className="event-location">{location}</h5>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;