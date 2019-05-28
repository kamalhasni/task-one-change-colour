import { COUNTER } from '../constants/action-types'

const initialState = {
    count: 0
}

function rootReducer(state = initialState, action) {    
    switch (action.type) {
        case COUNTER.INCREASED:
            return {
                ...state,
                count: action.count
            }
        case COUNTER.DECREASED:
            return {
                ...state,
                count: action.count
            }
        case COUNTER.SET:
            return {
                ...state,
                count: action.number
            }
        case COUNTER.RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer