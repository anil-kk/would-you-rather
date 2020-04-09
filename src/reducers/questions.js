import {INIT_QUESTIONS} from '../actions/types'

const questions = (state = [], action) => {
    switch (action.type) {
        case INIT_QUESTIONS:
            return action.questions
        default:
            return state
    }
}
export default questions