import React from "react";

const testimonials = [
  {
    name: "Ali Raza",
    feedback: "Outstanding service! I’m very satisfied with the final result.",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    feedback: "Very professional and cooperative. Highly recommended!",
    rating: 4,
  },
  {
    name: "David Lee",
    feedback: "Quick delivery and excellent design sense.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="stars">
    {"★".repeat(rating)}
    {"☆".repeat(5 - rating)}
  </div>
);


const Clients = () => {
  return (
    <div className="client-wrapper">
      <h2 className="client-title">Client Satisfaction</h2>
      <div className="client-grid">
        {testimonials.map((client, index) => (
          <div className="client-box" key={index}>
            <h3>{client.name}</h3>
            <p className="client-feedback">"{client.feedback}"</p>
            <StarRating rating={client.rating} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
