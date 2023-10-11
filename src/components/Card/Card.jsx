import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "./Card.css";

const Card = ({ id, title, tags, status }) => {
  const renderTags = () => {
    return (
      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags?.map((element, index) => (
          <div key={index} className="tag">
            <span>●</span> {element}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <img
            src="https://quicksell.co/assets/logo/logo.png"
            alt="QuickSell"
          />

          <div className="status"></div>
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      {renderTags()}
    </div>
  );
};

export default Card;
