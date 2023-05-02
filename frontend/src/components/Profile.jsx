import { useNavigate } from 'react-router-dom'
import Josy from '../assets/Auth0.png'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getProfile} from '../features/profile/profileSlice'

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { profile, isLoading, isError, message} = useSelector((state) => state.profile)

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        if(!user){
            navigate('/login')
        }

        dispatch(getProfile())


    }, [user, navigate, isError, message, dispatch ])

    const handleClick = () => {
        navigate('/dashboard/edit')
    }

    return (
        <div className="three">
            <div className='main'>
                <div className='main-sub'>
                    <h1>Personal info</h1>
                    <span>Basic info, like your name and photo</span>
                </div>
                <div className='mid'>
                    <div className='mid-top'>
                        <div className='top-one'>
                            <h2>Profile</h2>
                            <span>Some info may be visible to other people</span>
                        </div>
                        <div>
                            <button onClick={handleClick} className="btn btn-reverse">Edit</button>
                        </div>
                    </div>
                    <div className='mid-low'>
                        <div className='photo details'>
                            <h3>PHOTO</h3>
                            <img src={profile[0] ? profile[0].url : Josy} alt="" />
                        </div>
                        <div className='details'>
                            <h3>NAME</h3>
                            <span>{profile[0] ? profile[0].name : ""}</span>
                        </div>
                        <div className='details'>
                            <h3>BIO</h3>
                            <span>{profile[0] ? profile[0].bio : ""}</span>
                        </div>
                        <div className='details'>
                            <h3>PHONE</h3>
                            <span>{profile[0] ? profile[0].phone : ""}</span>
                        </div>
                        <div className='details'>
                            <h3>EMAIL</h3>
                            <span>{user && user.email}</span>
                        </div>
                        <div className='details end'>
                            <h3>PASSWORD</h3>
                            <span>********</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile