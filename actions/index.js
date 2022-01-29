import { FIST_BUMP, FIST_BUMP_ANIMATION } from "../constants/action-types";

const doFistBump = () => ({type: FIST_BUMP})
const doneFistBumpAnimation = () => ({type: FIST_BUMP_ANIMATION})

export { doFistBump, doneFistBumpAnimation }