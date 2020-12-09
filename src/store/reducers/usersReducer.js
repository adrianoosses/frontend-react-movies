const initialState ={
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            text: 'Log in user',
            completed: false
        },
        {
            text: 'Sign Up user',
            completed: false
        }
    ],
    user: []
}

export default function UsersReducer(state = initialState, action){
    switch(action.type){
        case 'LOGIN_USER':
            return state.user.push(action.payload);

        default:
            return action;
    }
}