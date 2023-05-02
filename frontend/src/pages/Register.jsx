import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { register, reset } from '../features/auth/authSlice'

import Google from '../assets/Google.svg'
import Git from '../assets/Gihub.svg'

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/dashboard')
        }

        dispatch(reset())
    },[user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
        [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email, password
        }

        dispatch(register(userData))
    }

    return (
        <div className='main-container'>
            <div className="one">
                <div className='main'>
                    <div className="head">
                        <h2>Join thousands of learners from around the world</h2>
                        <span>Master web development by making real-life projects. There arer multiple paths for you to choose</span>
                    </div>
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" id="email" value={email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="Password" id="password" value={password} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-block">Start coding now</button>
                        </form>
                    </div>
                    <div className="tail">
                        <span>or continue with these social profile</span>
                        <ul>
                            <li><img src={Google} alt="" /></li>
                            <li><img src={Git} alt="" /></li>
                        </ul>
                        <p>Already a member? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register