const initialState ={
    characters: []
}

export default function MoviesReduce(state = initialState, action){
    switch(action.type){
        case 'POST_CHARACTER':
            return state.movie.push(action.payload);

        default:
            return action;
    }
}