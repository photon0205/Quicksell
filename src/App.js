import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/action";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const { tickets, loading } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    if (!tickets) {
      dispatch(fetchData());
    }
  }, [dispatch, tickets]);

  return (
    <div>
      <Navbar />
      {loading ? <p>Loading...</p> : <Dashboard />}
    </div>
  );
};

export default App;
