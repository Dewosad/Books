import React from "react";

const Card = ({
  image,
  title,
  authors,
  releaseDate,
  Pages,
  rating,
  type,
  category,
  description,
}) => {
  return (
    <div className="bg-gray-900 border border-gray-500 rounded-2xl item flex items-center gap-5 max-w-[500px] hover:bg-gray-800 cursor-pointer">
      <div className="flex gap-5 items-center">
        <img
          src={image}
          alt="images"
          className="h-[200px] w-[120px] object-cover rounded-2xl"
        />
        <div className="flex flex-col">
          <h3 className="text-white">{title}</h3>
          <h2 className="text-white">Authors: {authors}</h2>
          <h1 className="text-white">Description: {description}</h1>
          <h1 className="text-white">Released Date: {releaseDate}</h1>

          <h1 className="text-white">Total Pages: {Pages}</h1>
          <h1 className="text-white">{rating}</h1>
          <h1 className="text-white">type: {type}</h1>
          <h1 className="text-white">Categories: {category}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
