import React from "react";
import { useParams } from "react-router-dom";

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="page-content">
      <h1>Car Details</h1>
      <p>Car ID: {id}</p>
    </div>
  );
};

export default CarDetailsPage;
