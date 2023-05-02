import Edit from '../components/Edit'
import Profile from "../components/Profile"
import Josy from '../assets/Auth0.png'
import { Route, Routes } from "react-router-dom"
import Option from '../components/Option'

import { FaCaretUp, FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'

import { useSelector } from 'react-redux'

const Dashboard = () => {
    const [option, setOption] = useState(false)

    const { profile } = useSelector((state) => state.profile)
    const { user } = useSelector((state) => state.auth)

    const handleOption = () => {
        setOption((prev) => !prev)
    }
    return (
        <div className="dashboard">
            <div className="navbar">
                <div className="nav-one">
                    <img src={Josy} alt="" />
                </div>
                <div className="nav-two">
                    <img src={profile[0] ? profile[0].url : Josy} alt="" />
                    <h2>{profile[0] ? profile[0].name : user.email}</h2>
                    {option ? (
                        <FaCaretUp size={18} style={{cursor: 'pointer'}} onClick={handleOption} />
                    ) : (
                        <FaCaretDown size={18} style={{cursor: 'pointer'}} onClick={handleOption} />
                    )}
                    { option && <Option />}
                </div>
            </div>
            <Routes>
                <Route path={'/'} element={<Profile />} />
                <Route path={'/edit'} element={<Edit />} />
            </Routes>
        </div>
    )
}
export default Dashboard