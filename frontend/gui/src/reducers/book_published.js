import { GET_BOOK_PUBLISHED,ADD_BOOK_PUBLISHED } from '../actions/types';


const initialstate = {
    book: []
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_BOOK_PUBLISHED:
            return{
                ...state,
                book: action.payload
            };

        case ADD_BOOK_PUBLISHED:
            return{
                ...state,
                book: [...state.book,action.payload]
            };
        default:
            return state;
    }

}
