import axios from 'axios'

// LOGIN HAPPENING HERE


export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("auth/login", userCredentials)
        dispatch({type:"LOGIN_SUCCESS", payload : res.data})
    }
    catch (err) {
         if(err.response.status=== 401)
        alert("Invalid User credentials")
        dispatch({type:"LOGIN_FAILURE", payload: err.message})
    }
}

// REGISTRATION OF NEW USER IS HERE
export const registerCall = async(user) => {
    try {
                const res = await axios.post("/auth/register", user);
                return res;
    } catch (error) {
        return error
    }
}


export const logoutCall = () =>{
    localStorage.setItem("user", null)
}