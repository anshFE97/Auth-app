import Google from '../assets/Google.svg'
import Git from '../assets/Gihub.svg'

import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/dashboard')
        }
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = { email, password }
        dispatch(login(userData))
    }

    return (
        <div className='main-container'>
            <div className="two">
                <div className="main">
                    <div className='head'>
                        <h2>Login</h2>
                    </div>
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input id="email" value={email} onChange={handleChange} type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input id="password" value={password} onChange={handleChange} type="password" name="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-block">Login</button>
                        </form>
                    </div>
                    <div className="tail">
                        <span>or continue with these social profile</span>
                        <ul>
                            <li><img src={Google} alt="" /></li>
                            <li><img src={Git} alt="" /></li>
                        </ul>
                        <p>Don't have an account yet? <Link to="/">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login