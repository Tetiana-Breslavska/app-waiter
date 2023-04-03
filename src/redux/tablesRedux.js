import { API_URL } from "../config";

//selectors
export const getAllTables = ({tables}) => tables;
export const getOneTable = ({tables}, tableActiveId) => tables.filter(table => table.id === tableActiveId);


// action names
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName ('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});

export const fetchTables = () => {
  return (dispatch) => {
    fetch (`${API_URL}/tables/`)
      .then (res => res.json())
      .then (tables => dispatch(updateTables(tables)));
  }
};

export const tableRequest = (data) => {
  return (dispatch) => {
    const options = {
      method:'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        status: data.status,
        peopleAmount: data.peopleAmount,
        maxPeopleAmount: data.maxPeopleAmount,
        bill: data.bill,
      }),
    };
    console.log(JSON.stringify);
    fetch(`${API_URL}/tables/${data.id}`, options)
    
  }
}





const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];

    default:
      return statePart;
  };
};
export default tablesReducer;