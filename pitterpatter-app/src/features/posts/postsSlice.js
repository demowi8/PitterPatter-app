import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', content: 'Hello!' },
  { id: '2', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer