import { GET_INVITED_LECTURES,ADD_INVITED_LECTURES,GET_INVITED_LECTURE_BY_ID,
EDIT_INVITED_LECTURES,DELETE_INVITED_LECTURES } from '../actions/types';


const initialstate = {
    lecture: [],
    lecture_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_INVITED_LECTURES:
            return{
                ...state,
                lecture: action.payload
            };

        case GET_INVITED_LECTURE_BY_ID:
            return{
                ...state,
                lecture_by_id: action.payload
            };

        case ADD_INVITED_LECTURES:
        case EDIT_INVITED_LECTURES:
        case DELETE_INVITED_LECTURES:
            return{
                ...state,
                lecture: [...state.lecture,action.payload]
            };
        default:
            return state;
    }

}
