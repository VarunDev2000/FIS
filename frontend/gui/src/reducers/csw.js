import { GET_CSW,ADD_CSW } from '../actions/types';


const initialstate = {
    csw: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_CSW:
            return{
                ...state,
                csw: action.payload
            };

        case ADD_CSW:
            return{
                ...state,
                csw: [...state.csw,action.payload]
            };
        default:
            return state;
    }

}
