import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: "dataRequest" });

    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment/"
    );

    dispatch({ type: "dataSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "dataFailure" });
  }
};

export const dataSelect = (group, tickets, order) => async (dispatch) => {
  try {
    dispatch({ type: "dataSelectRequest" });

    let user = false;
    let dataSelected = [];

    if (order === "title") {
      dataSelected.forEach((element, index) => {
        element[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
      });
    }

    if (group === "status") {
      const set = new Set();
      tickets.forEach((element) => set.add(element.status));

      const array = [...set];

      array.forEach((element, index) => {
        const array = tickets.filter((filterElement) => element === filterElement.status);
        dataSelected.push({
          [index]: {
            title: element,
            value: array,
          },
        });
      });
    } else if (group === "user") {
      user = true;
      tickets?.users?.forEach((element, index) => {
        const array = tickets?.tickets?.filter((filterElement) => element.id === filterElement.userId);
        dataSelected.push({
          [index]: {
            title: element.name,
            value: array,
          },
        });
      });
    } else {
      const priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];

      priorityList.forEach((element, index) => {
        const array = tickets.filter((filterElement) => index === filterElement.priority);
        dataSelected.push({
          [index]: {
            title: element,
            value: array,
          },
        });
      });
    }

    if (order === "priority") {
      dataSelected.forEach((element, index) => {
        element[index]?.value?.sort((a, b) => b.priority - a.priority);
      });
    }

    dispatch({ type: "dataSelectSuccess", payload: { dataSelected, user } });
  } catch (error) {
    dispatch({ type: "dataSelectFailure", payload: error.message });
  }
};
