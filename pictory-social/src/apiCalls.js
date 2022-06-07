import axios from 'axios'
export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("auth/login", userCredentials)
        dispatch({type:"LOGIN_SUCCESS", payload : res.data})
    }
    catch (err) {
         if(err.response.status=== 404)
        alert("Bad Login Credentials")
        dispatch({type:"LOGIN_FAILURE", payload: err.message})
    }
}