import { createSlice } from '@reduxjs/toolkit/dist/createSlice'

const initialState = {
  services: [{
    title: '',
    description: '',
    imageService: '',
    tags: []
  }]
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setTitleService: (state, action) => { state.services.title = action.payload },
    setDescriptionService: (state, action) => { state.services.description = action.payload },
    setImageService: (state, action) => { state.services.imageService = action.payload },
    setTagService: (state, action) => { state.services.setTagService.push(action.payload) }
  }
})

export const { setDescriptionService, setTagService, setImageService, setTitleService } = servicesSlice.actions

export default servicesSlice.reducer
