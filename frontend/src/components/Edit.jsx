import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProfile, updateProfile } from '../features/profile/profileSlice'
import ImageSet from "./ImageSet"
import { update } from '../features/auth/authSlice'

const Edit = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { profile } = useSelector((state) => state.profile)
    const { url } = useSelector((state) => state.upload)
    const { user } = useSelector((state) => state.auth)
 
    const profileId = profile && profile[0] && profile[0]._id

    const [pro, setPro] = useState({
        name: '',
        bio: '',
        phone: '',
        email: '',
        password: ''
    })

    const { name, bio, phone, email, password } = pro

    const handleChange = (e) => {
        setPro((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const profileData = {
            name, bio, phone, url
        }

        const userData = {
            email, password
        }

        console.log(dispatch(update({userData, id: user._id})))
        dispatch(update({userData, id: user._id}))

        if(profileData) {
            if (profileId) {
                dispatch(updateProfile({ updateProfile: profileData, id: profileId }));
            } else {
    
                dispatch(createProfile(profileData))
            }
        }


        navigate('/dashboard/')
    }

    return (
        <div className="three">
            <Link to="/dashboard" className="back">Back</Link>
            <div className=" mid edit">
                <div className="main">
                    <div className="top-one">
                        <h2>Change Info</h2>
                        <span>Changes will be reflected on every services</span>
                    </div>
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <ImageSet />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input value={name} onChange={handleChange} type="text" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label>Bio</label>
                                <textarea value={bio} onChange={handleChange} name="bio" placeholder="Enter your bio" />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input value={phone} onChange={handleChange} type="number" name="phone" placeholder="Enter your phone" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input value={email} onChange={handleChange} type="email " name="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input value={password} onChange={handleChange} type="password" name="password" placeholder="Enter new password" />
                            </div>
                            <button type="submit" className="btn">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit