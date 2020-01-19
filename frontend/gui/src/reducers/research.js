import { GET_RESEARCH,ADD_RESEARCH,EDIT_RESEARCH,
    DELETE_RESEARCH,GET_RESEARCH_BY_ID } from '../actions/types';


const initialstate = {
    research: [],
    research_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_RESEARCH:
            return{
                ...state,
                research: action.payload
            };

        case GET_RESEARCH_BY_ID:
            return{
                ...state,
                research_by_id: action.payload
            };

        case ADD_RESEARCH:
        case EDIT_RESEARCH:
        case DELETE_RESEARCH:
            return{
                ...state,
                research: [...state.research,action.payload]
            };
        default:
            return state;
    }

}
