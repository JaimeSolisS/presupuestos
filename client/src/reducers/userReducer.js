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