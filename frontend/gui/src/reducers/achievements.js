import { GET_ACHIEVEMENTS,ADD_ACHIEVEMENTS, GET_ACHIEVEMENTS_BY_ID, 
    EDIT_ACHIEVEMENTS, DELETE_ACHIEVEMENTS } from '../actions/types';


const initialstate = {
    achievements: [],
    achievements_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_ACHIEVEMENTS:
            return{
                ...state,
                achievements: action.payload
            };

        case GET_ACHIEVEMENTS_BY_ID:
            return{
            ...state,
            achievements_by_id: action.payload
            };
        

        case ADD_ACHIEVEMENTS:
        case EDIT_ACHIEVEMENTS:
        case DELETE_ACHIEVEMENTS:
            return{
                ...state,
                achievements: [...state.achievements,action.payload]
            };
        default:
            return state;
    }

}
