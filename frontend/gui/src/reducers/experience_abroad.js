import { GET_EXPERIENCE_ABROAD,ADD_EXPERIENCE_ABROAD,EDIT_EXPERIENCE_ABROAD,
DELETE_EXPERIENCE_ABROAD,GET_EXPERIENCE_ABROAD_BY_ID } from '../actions/types';


const initialstate = {
    exp: [],
    exp_by_id: {},
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_EXPERIENCE_ABROAD:
            return{
                ...state,
                exp: action.payload
            };

        case GET_EXPERIENCE_ABROAD_BY_ID:
            return{
                ...state,
                exp_by_id: action.payload
            };

        case ADD_EXPERIENCE_ABROAD:
        case EDIT_EXPERIENCE_ABROAD:
        case DELETE_EXPERIENCE_ABROAD:
            return{
                ...state,
                exp: [...state.exp,action.payload]
            };
        default:
            return state;
    }

}
