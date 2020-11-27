const initialState ={
    characters: []
}

export default function MoviesReduce(state = initialState, action){
    switch(action.type){
        case 'POST_CHARACTER':
            return state.movie.push(action.payload);
        case 'PUT_CHARACTER':
            const filter = state.movie.filter(
                movie => movie.id !== action.payload.id
                )
            return filter.push(action.payload);
        case 'DELETE CHARACTER':
            return state.movies.filter(
                movie => movie.id !== action.payload.id
                )
        default:
            return action;
    }
}