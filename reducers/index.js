import { FIST_BUMP, FIST_BUMP_ANIMATION } from "../constants/action-types"

const initState = {
    isFistBumped: false,
    isFistBumpedAnimationCompleted: false
}

const reducer = (state = initState, action) => {
    // console.log("Redux action: ", action.type);
    switch (action.type){
        case FIST_BUMP:
            return {...state, isFistBumped: true}
        case FIST_BUMP_ANIMATION:
            return {...state, isFistBumpedAnimationCompleted: true}
        default:
            return state 
    }
}

export default reducer