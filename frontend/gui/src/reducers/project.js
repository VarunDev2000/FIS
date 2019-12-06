import { GET_PROJECT,ADD_PROJECT,EDIT_PROJECT,
    DELETE_PROJECT,GET_PROJECT_BY_ID } from '../actions/types';


const initialstate = {
    project: [],
    project_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_PROJECT:
            return{
                ...state,
                project: action.payload
            };

        case GET_PROJECT_BY_ID:
            return{
                ...state,
                project_by_id: action.payload
            };

        case ADD_PROJECT:
        case EDIT_PROJECT:
        case DELETE_PROJECT:
            return{
                ...state,
                project: [...state.project,action.payload]
            };
        default:
            return state;
    }

}
