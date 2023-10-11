import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { BsSliders, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../../actions/action";

const Navbar = () => {
  const [slider, setSlider] = useState(false);
  const dispatch = useDispatch();
  const { tickets, users } = useSelector((state) => state.dataSlice);
  const [groups, setGroups] = useState(localStorage.getItem("group") || "status");
  const [order, setOrder] = useState(localStorage.getItem("order") || "priority");

  const handleSliderToggle = () => {
    setSlider(!slider);
  };

  const handleGroupChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      setGroups(selectedValue);
      localStorage.setItem("group", selectedValue);
    } else {
      setOrder(selectedValue);
      localStorage.setItem("order", selectedValue);
    }
    handleSliderToggle();
  };

  useEffect(() => {
    if (groups === "user") {
      dispatch(dataSelect(groups, { tickets, users }, order));
    } else {
      dispatch(dataSelect(groups, tickets, order));
    }
  }, [tickets, dispatch, groups, users, order]);

  return (
    <div className="navbar">
      <div className="navbarButton">
        <button className="groupButton" onClick={handleSliderToggle}>
          <BsSliders /> Display <BsChevronDown />
        </button>

        {slider && (
          <div className="dropDown">
            <div className="group">
              <span style={{ color: "grey" }}>Grouping</span>
              <select
                value={groups}
                onChange={(e) => handleGroupChange(e)}
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="group">
              <span style={{ color: "grey" }}>Ordering</span>
              <select
                value={order}
                onChange={(e) => handleGroupChange(e)}
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
