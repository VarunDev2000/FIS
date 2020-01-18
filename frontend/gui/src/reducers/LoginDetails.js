import { GET_LOGIN_DETAILS_BY_ID } from '../actions/types';


const initialstate = {
    l_details_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){

        case GET_LOGIN_DETAILS_BY_ID:
            return{
                ...state,
                l_details_by_id: action.payload
            };

        default:
            return state;
    }

}
