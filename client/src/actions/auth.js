import { AUTH } from '../constants/actionType';
import * as api from '../api';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        //user login
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, data})

        navigate('/')
    } catch (error) {
        console.log(error)
    }

}

export const signup = (formData, navigate) => async(dispatch)=>{
    try {
        //sign up user
        const { data } = await api.signUp(formData)

        dispatch({ type: AUTH, data})

        navigate('/')
    } catch (error) {
        console.log(error)
    }
}