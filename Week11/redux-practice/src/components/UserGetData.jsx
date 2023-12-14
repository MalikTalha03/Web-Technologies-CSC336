import React from 'react'
import { fakeData } from './fakedata'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addUser } from '../app/features/counter/userSlice'

const UserGetData = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user)
    const getFakeUserInfo = () => {
        dispatch(addUser(fakeData()))
    }
  return (
    <>
        <h1>Hi, UserGetData component here</h1>
        <button onClick={getFakeUserInfo}>Add User Info</button>
        <ul>
            {users.map((user) => (
                <li>{user}</li>
            ))}
        </ul>
    </>
  )
}

export default UserGetData