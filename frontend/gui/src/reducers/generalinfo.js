import { GET_STAFFINFO,ADD_STAFFINFO } from '../actions/types';


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
            return{
                ...state,
                generalinfo: [...state.generalinfo,action.payload]
            };
        default:
            return state;
    }

}
