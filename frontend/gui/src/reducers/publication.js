import { GET_PUBLICATION,ADD_PUBLICATION,EDIT_PUBLICATION,
    DELETE_PUBLICATION,GET_PUBLICATION_BY_ID } from '../actions/types';


const initialstate = {
    publication: [],
    publication_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_PUBLICATION:
            return{
                ...state,
                publication: action.payload
            };

        case GET_PUBLICATION_BY_ID:
            return{
                ...state,
                publication_by_id: action.payload
            };

        case ADD_PUBLICATION:
        case EDIT_PUBLICATION:
        case DELETE_PUBLICATION:
            return{
                ...state,
                publication: [...state.publication,action.payload]
            };
        default:
            return state;
    }

}
