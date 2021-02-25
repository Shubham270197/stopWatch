import { content } from '../actionType'

export const getUserDataInitiate = (data) => ({
    type: content.GET_USER_DATA_INITIATE,
    payld: data
})

export const getUserDataSuccess = (data) => ({
    type: content.GET_USER_DATA_SUCCESS,
    payld: data
})

export const getUserDataFailure = (data) => ({
    type: content.GET_USER_DATA_FAILURE,
    payld: data
})