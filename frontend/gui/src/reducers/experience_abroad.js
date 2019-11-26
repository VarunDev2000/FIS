import { GET_EXPERIENCE_ABROAD,ADD_EXPERIENCE_ABROAD } from '../actions/types';


const initialstate = {
    exp: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_EXPERIENCE_ABROAD:
            return{
                ...state,
                exp: action.payload
            };

        case ADD_EXPERIENCE_ABROAD:
            return{
                ...state,
                exp: [...state.exp,action.payload]
            };
        default:
            return state;
    }

}
