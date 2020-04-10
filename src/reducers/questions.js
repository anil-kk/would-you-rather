import {INIT_QUESTIONS, UPDATE_ANSWER} from '../actions/types'

const questions = (state = [], action) => {
    switch (action.type) {
        case INIT_QUESTIONS:
            return action.questions
        case UPDATE_ANSWER:

            return{
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: [...state[action.qid][action.answer].votes, action.uid]
                    }
                }
            }
        default:
            return state
    }
}
export default questions