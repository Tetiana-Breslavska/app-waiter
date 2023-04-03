
//actions
const createActionName = actionName => `app/dataForServer/${actionName}`;
const SET_DATA_FOR_SERVER = createActionName('SET_DATA_FOR_SERVER');

//action creators
export const setDataForServer = payload => ({ type: SET_DATA_FOR_SERVER, payload });

const dataForServerReduser = (statePart = {}, action) => {
    switch(action.type) {
        case SET_DATA_FOR_SERVER:
            return {...statePart, ...action.payload}; 
        default:
            return statePart;
    }
}


export default dataForServerReduser;