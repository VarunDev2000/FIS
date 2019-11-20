import { GET_QUALIFICATION,ADD_QUALIFICATION } from '../actions/types';


const initialstate = {
    qualification: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_QUALIFICATION:
            return{
                ...state,
                qualification: action.payload
            };

        case ADD_QUALIFICATION:
            return{
                ...state,
                qualification: [...state.qualification,action.payload]
            };
        default:
            return state;
    }

}
