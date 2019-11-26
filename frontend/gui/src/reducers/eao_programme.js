import { GET_EAO_PROGRAMME,ADD_EAO_PROGRAMME } from '../actions/types';


const initialstate = {
    eao: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_EAO_PROGRAMME:
            return{
                ...state,
                eao: action.payload
            };

        case ADD_EAO_PROGRAMME:
            return{
                ...state,
                eao: [...state.eao,action.payload]
            };
        default:
            return state;
    }

}
