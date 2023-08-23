import React from 'react';
import './MemberCard.css'

const MemberCard = ({ member, currentDate }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-').map(part => part.padStart(2, '0'));
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="custom-card mb-3">
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
        <div className="card-grid">
          <div>
            <span className="card-label">Date: </span>
            <span className="card-value">{formatDate(member.date)}</span>
          </div>
          <div>
            <span className="card-label">Milk: </span>
            <span className="card-value">{member.milk}</span>
          </div>
          <div>
            <span className="card-label">SNF: </span>
            <span className="card-value">{member.snf}</span>
          </div>
          <div>
            <span className="card-label">Fat: </span>
            <span className="card-value">{member.fat}</span>
          </div>
          <div>
            <span className="card-label">Animal: </span>
            <span className="card-value">{member.animal}</span>
          </div>
          <div>
            <span className="card-label">Time: </span>
            <span className="card-value">{member.time}</span>
          </div>
          <div>
            <span className="card-label">Amount: </span>
            <span className="card-value">${member.amount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
