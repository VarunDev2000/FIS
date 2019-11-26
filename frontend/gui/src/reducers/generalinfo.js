import { GET_STAFFINFO,ADD_STAFFINFO,EDIT_STAFFINFO,DELETE_STAFFINFO } from '../actions/types';


const initialstate = {
    generalinfo: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_STAFFINFO:
            return{
                ...state,
                generalinfo: action.payload
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
