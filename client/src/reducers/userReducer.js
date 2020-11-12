//Get the currently loggedin user from firebase and based in auth state, 
//populate redux state to easily access the user information in the application

export function userReducer(state = null, action){
    switch(action.type){
        case "LOGGED_IN_USER":
            return action.payload; //update state with type and payload(user info) 

        case "LOGOUT": 
            return action.payload; // user = {}
        default:
            return state; 
    }
}