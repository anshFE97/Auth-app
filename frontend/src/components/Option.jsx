import { logout, reset } from '../features/auth/authSlice'
import { resetProfile } from '../features/profile/profileSlice'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FaUserCircle, FaUsers, FaSignOutAlt } from 'react-icons/fa'

const Option = () => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        dispatch(resetProfile())
    }
  return (
    <div className='options'>
        <div className='option-main'>
            <div className='option'>
                <FaUserCircle size={20}/>
                <h2>My Profile</h2>
            </div>
            <div className='option'>
                <FaUsers size={20} />
                <h2>Group Chat</h2>
            </div>
            <Link to={'/login'} className='option option-last' onClick={onLogout}>
                <FaSignOutAlt size={20} />
                <h2>Logout</h2>
            </Link>
        </div>
    </div>
  )
}
export default Option