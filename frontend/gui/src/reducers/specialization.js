import { GET_SPECIALIZATION,ADD_SPECIALIZATION } from '../actions/types';


const initialstate = {
    specialization: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_SPECIALIZATION:
            return{
                ...state,
                specialization: action.payload
            };

        case ADD_SPECIALIZATION:
            return{
                ...state,
                specialization: [...state.specialization,action.payload]
            };
        default:
            return state;
    }

}
