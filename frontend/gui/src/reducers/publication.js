import { GET_PUBLICATION,ADD_PUBLICATION } from '../actions/types';


const initialstate = {
    publication: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_PUBLICATION:
            return{
                ...state,
                publication: action.payload
            };

        case ADD_PUBLICATION:
            return{
                ...state,
                publication: [...state.publication,action.payload]
            };
        default:
            return state;
    }

}
