import { GET_EAO_PROGRAMME,ADD_EAO_PROGRAMME,EDIT_EAO_PROGRAMME,
DELETE_EAO_PROGRAMME,GET_EAO_PROGRAMME_BY_ID } from '../actions/types';


const initialstate = {
    eao: [],
    eao_by_id: {},
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_EAO_PROGRAMME:
            return{
                ...state,
                eao: action.payload
            };

        case GET_EAO_PROGRAMME_BY_ID:
            return{
                ...state,
                eao_by_id: action.payload
            };

        case ADD_EAO_PROGRAMME:
        case EDIT_EAO_PROGRAMME:
        case DELETE_EAO_PROGRAMME:
            return{
                ...state,
                eao: [...state.eao,action.payload]
            };
        default:
            return state;
    }

}
