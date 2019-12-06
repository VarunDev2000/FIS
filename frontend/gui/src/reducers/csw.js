import { GET_CSW,ADD_CSW,EDIT_CSW,DELETE_CSW,GET_CSW_BY_ID } from '../actions/types';


const initialstate = {
    csw: [],
    csw_by_id: {}
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_CSW:
            return{
                ...state,
                csw: action.payload
            };

        case GET_CSW_BY_ID:
            return{
                ...state,
                csw_by_id: action.payload
            };

        case ADD_CSW:
        case EDIT_CSW:
        case DELETE_CSW:
            return{
                ...state,
                csw: [...state.csw,action.payload]
            };
        default:
            return state;
    }

}
