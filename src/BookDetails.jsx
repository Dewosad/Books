import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const {
    image,
    title,
    authors,
    releaseDate,
    Pages,
    rating,
    type,
    category,
    description,
  } = location.state || {};

  return (
    <div className="bg-gray-900 flex h-full text-white p-5">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <img
          src={image}
          alt="images"
          className="h-[200px] w-[120px] object-cover rounded-2xl"
        />
      </div>
      <h1>Book Details</h1>
      <h3>Title: {title}</h3>
      <p>Authors: {authors}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Pages: {Pages}</p>
      <p>Rating: {rating}</p>
      <p>Type: {type}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default BookDetails;
