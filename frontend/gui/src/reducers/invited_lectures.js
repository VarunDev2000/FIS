import { GET_INVITED_LECTURES,ADD_INVITED_LECTURES } from '../actions/types';


const initialstate = {
    lecture: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_INVITED_LECTURES:
            return{
                ...state,
                lecture: action.payload
            };

        case ADD_INVITED_LECTURES:
            return{
                ...state,
                lecture: [...state.lecture,action.payload]
            };
        default:
            return state;
    }

}
