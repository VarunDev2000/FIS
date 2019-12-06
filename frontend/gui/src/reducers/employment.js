import { GET_EMPLOYMENT,ADD_EMPLOYMENT, GET_EMPLOYMENT_BY_ID, 
    EDIT_EMPLOYMENT, DELETE_EMPLOYMENT } from '../actions/types';


const initialstate = {
    employment: [],
    employment_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_EMPLOYMENT:
            return{
                ...state,
                employment: action.payload
            };

        case GET_EMPLOYMENT_BY_ID:
            return{
            ...state,
            employment_by_id: action.payload
            };
        

        case ADD_EMPLOYMENT:
        case EDIT_EMPLOYMENT:
        case DELETE_EMPLOYMENT:
            return{
                ...state,
                employment: [...state.employment,action.payload]
            };
        default:
            return state;
    }

}
