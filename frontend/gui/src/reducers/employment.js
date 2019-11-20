import { GET_EMPLOYMENT,ADD_EMPLOYMENT } from '../actions/types';


const initialstate = {
    employment: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_EMPLOYMENT:
            return{
                ...state,
                employment: action.payload
            };

        case ADD_EMPLOYMENT:
            return{
                ...state,
                employment: [...state.employment,action.payload]
            };
        default:
            return state;
    }

}
