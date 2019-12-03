import { GET_STAFFINFO,ADD_STAFFINFO,EDIT_STAFFINFO,
    DELETE_STAFFINFO,GET_STAFFINFO_BY_ID } from '../actions/types';


const initialstate = {
    generalinfo: [],
    generalinfo_by_id: {},
    length : 0,
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_STAFFINFO:
            return{
                ...state,
                generalinfo: action.payload,
                length: action.payload.length
            };

        case GET_STAFFINFO_BY_ID:
            return{
                ...state,
                generalinfo_by_id: action.payload,
                length: action.payload.length
            };

        case ADD_STAFFINFO:
        case EDIT_STAFFINFO:
        case DELETE_STAFFINFO:
            return{
                ...state,
                generalinfo: [...state.generalinfo,action.payload]
            };
      
        default:
            return state;
    }

}
