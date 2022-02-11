import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/doctors/${props.name}`);
  };
  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full" onClick={handleClick}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="Clinic"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVQ4jdWSQQqAIBBFX9IJvHLSxepQTRvbVIxC47iI6MOgM8j7XxRe0gpkVUsvIDf6W+FcZ0CUI5QJdC9AqkECRGe6CGytyO55eDjg1uhwvvaDBfruCi2AGVsDdvqeUephovxIVgkwOc3+oANaPiic7lEfAwAAAABJRU5ErkJggg=="
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              {props.name}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  name: "",
};

export default Card;
