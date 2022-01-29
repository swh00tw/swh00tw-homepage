import { FIST_BUMP } from "../constants/action-types"

const initState = {
    isFistBumped: false
}

const reducer = (state = initState, action) => {
    // console.log("Redux action: ", action.type);
    switch (action.type){
        case FIST_BUMP:
            return {...state, isFistBumped: true}
        default:
            return state 
    }
}

export default reducer