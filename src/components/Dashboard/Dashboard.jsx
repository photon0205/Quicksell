import React from "react";
import { useSelector } from "react-redux";
import { BsReception4, BsPlusLg } from "react-icons/bs";
import "./Dashboard.css";
import Card from "../Card/Card";

const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  if (!dataSelected) {
    return null;
  }

  const renderCard = (element, index) => (
    <div key={index} className="dashboard" style={{ backgroundColor: "whitesmoke" }}>
      <div className="cardHeading1">
        <div className="sideView1" style={{ display: "flex", alignItems: "center" }}>
          {!user ? (
            <BsReception4 />
          ) : (
            <div className="image">
              <img src="https://quicksell.co/assets/logo/logo.png" alt="QuickSell" />
            </div>
          )}
          <span>
            {element[index]?.title} {element[index]?.value?.length}
          </span>
        </div>
        <div className="sideView2">
          <BsPlusLg />
          <span style={{ letterSpacing: "2px" }}>...</span>
        </div>
      </div>
      <div className="selectList">
        {element[index]?.value?.map((subElement, ind) => (
          <Card key={subElement.id} id={subElement.id} title={subElement.title} tags={subElement.tag} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container" style={{ justifyContent: "space-evenly" }}>
      {dataSelected.map((element, index) => renderCard(element, index))}
    </div>
  );
};

export default Dashboard;
