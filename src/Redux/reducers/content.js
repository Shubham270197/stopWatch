import content from '../actionType'

const initialState = {
    contentData: [],
    loader: false
}

export default function contentModule(state = initialState, { payld,type }) {
    switch(type) {
        case content.GET_USER_DATA_INITIATE:
            return {...state, loader: true}

        case content.GET_USER_DATA_SUCCESS:
            return {...state, contentData: payld}

        case content.GET_USER_DATA_FAILURE:
            return {...state, loader: false, contentData: []}

        default:
            return state
    }
}
