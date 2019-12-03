import { GET_QUALIFICATION,ADD_QUALIFICATION,EDIT_QUALIFICATION,
    DELETE_QUALIFICATION,GET_QUALIFICATION_BY_ID } from '../actions/types';


const initialstate = {
    qualification: [],
    qualification_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        
        case GET_QUALIFICATION:
            return{
                ...state,
                qualification: action.payload
            };

        case GET_QUALIFICATION_BY_ID:
            return{
                ...state,
                qualification_by_id: action.payload
            };

        case ADD_QUALIFICATION:
        case EDIT_QUALIFICATION:
        case DELETE_QUALIFICATION:
            return{
                ...state,
                qualification: [...state.qualification,action.payload]
            };
        default:
            return state;
    }

}
