import { GET_BOOK_PUBLISHED,ADD_BOOK_PUBLISHED,EDIT_BOOK_PUBLISHED,
DELETE_BOOK_PUBLISHED,GET_BOOK_PUBLISHED_BY_ID } from '../actions/types';


const initialstate = {
    book: [],
    book_by_id: {},
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_BOOK_PUBLISHED:
            return{
                ...state,
                book: action.payload
            };

        case GET_BOOK_PUBLISHED_BY_ID:
            return{
                ...state,
                book_by_id: action.payload
            };

        case ADD_BOOK_PUBLISHED:
        case EDIT_BOOK_PUBLISHED:
        case DELETE_BOOK_PUBLISHED:
            return{
                ...state,
                book: [...state.book,action.payload]
            };
        default:
            return state;
    }

}
