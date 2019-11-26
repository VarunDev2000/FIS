import { GET_PROJECT,ADD_PROJECT } from '../actions/types';


const initialstate = {
    project: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_PROJECT:
            return{
                ...state,
                project: action.payload
            };

        case ADD_PROJECT:
            return{
                ...state,
                project: [...state.project,action.payload]
            };
        default:
            return state;
    }

}
