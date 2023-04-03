

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
    fetch ('http://localhost:3131/api/tables')
      .then (res => res.json())
      .then (tables => dispatch(updateTables(tables)));
  }
};

export const tableRequest = (argStatus ) => {
  return (dispatch) => {
    const options = {
      method:'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        status: argStatus,
        // peopleAmount: table.peopleAmount,
        // maxPeopleAmount: table.maxPeopleAmount,
        // bill: table.bill,
      }),
    };
    console.log(JSON.stringify);
    fetch('http://localhost:3131/tables/1', options)
      // .then(()=>...)
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