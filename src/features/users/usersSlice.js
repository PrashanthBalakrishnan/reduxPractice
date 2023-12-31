import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Dude Lebowsky' },
  { id: '1', name: 'Neil Young' },
  { id: '2', name: 'Dave Grey' },
]

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer
