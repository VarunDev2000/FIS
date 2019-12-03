import { GET_SPECIALIZATION,ADD_SPECIALIZATION,
EDIT_SPECIALIZATION,DELETE_SPECIALIZATION,GET_SPECIALIZATION_BY_ID } from '../actions/types';


const initialstate = {
    specialization: [],
    specialization_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_SPECIALIZATION:
            return{
                ...state,
                specialization: action.payload
            };

        case GET_SPECIALIZATION_BY_ID:
            return{
                ...state,
                specialization_by_id: action.payload
            };

        case ADD_SPECIALIZATION:
        case EDIT_SPECIALIZATION:
        case DELETE_SPECIALIZATION:
            return{
                ...state,
                specialization: [...state.specialization,action.payload]
            };
        default:
            return state;
    }

}
