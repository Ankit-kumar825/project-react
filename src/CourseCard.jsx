import React from 'react';
import './CourseCard.css';

export default function CourseCard({ data }) {
  return (
    <div className="course-card">

      {/* Corner Accents (visible on hover) */}
      <div className="card-corner tl"></div>
      <div className="card-corner tr"></div>
      <div className="card-corner bl"></div>
      <div className="card-corner br"></div>

      {/* Card Image */}
      <div className="card-img">
        <img src={data.img} alt={data.name} />
      </div>

      {/* Card Content */}
      <div className="course-content">
        <h3 className="course-name">{data.name}</h3>
        <div className="course-details">
          <span className="course-duration">{data.duration}</span>
          <span className="course-price">{data.price}</span>
        </div>
      </div>

    </div>
  );
}