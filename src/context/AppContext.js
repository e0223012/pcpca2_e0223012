import { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { fetchActivities } from "../services/api";

export const AppContext = createContext();

const initialState = {
  activities: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchActivities();
      dispatch({
        type: "SET_ACTIVITIES",
        payload: Array.isArray(data) ? data : data.activities || [],
      });
    };
    loadData();
  }, []);

  return (
    <AppContext.Provider value={{ state }}>
      {children}
    </AppContext.Provider>
  );
};