import React, {useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import "../styling/login.scss"

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            setError(null)
            await login(inputs)
            navigate("/")
            // const res = await axios.post("/auth/login", inputs)
            // console.log(res)
            // if(res.status === 200){
            //     navigate("/")
            // }
        } catch (err) {
            console.log(err)
            setError(err.response.data)
        }
    }

    return (
        <div className='auth'>
            <h1>
                Login
            </h1>
            <form>
                <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
                <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login