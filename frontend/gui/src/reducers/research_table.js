import { GET_RESEARCH_TABLE,ADD_RESEARCH_TABLE,EDIT_RESEARCH_TABLE,
    DELETE_RESEARCH_TABLE,GET_RESEARCH_TABLE_BY_ID } from '../actions/types';


const initialstate = {
    research_table: [],
    research_table_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_RESEARCH_TABLE:
            return{
                ...state,
                research_table: action.payload
            };

        case GET_RESEARCH_TABLE_BY_ID:
            return{
                ...state,
                research_table_by_id: action.payload
            };

        case ADD_RESEARCH_TABLE:
        case EDIT_RESEARCH_TABLE:
        case DELETE_RESEARCH_TABLE:
            return{
                ...state,
                research: [...state.research_table,action.payload]
            };
        default:
            return state;
    }

}
