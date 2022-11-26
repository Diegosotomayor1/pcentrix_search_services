import { createSlice } from '@reduxjs/toolkit'
import { services } from './data'
const initialState = {
  services,
  servicesFound: []
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setTitleService: (state, action) => { state.services.title = action.payload },
    setDescriptionService: (state, action) => { state.services.description = action.payload },
    setImageService: (state, action) => { state.services.imageService = action.payload },
    setTagService: (state, action) => { state.services.setTagService.push(action.payload) },
    setServiceFound: (state, action) => { state.services = action.payload },
    SearchServices: (state, action) => {
      const input = action.payload
      const servicios = state.services
      const searchValue = input.toLowerCase()
      const keywords = servicios.filter(
        service =>
          service.title.toLowerCase().includes(searchValue) ||
          service.tags.find(tag => tag.toLowerCase().includes(searchValue))
      )
      state.servicesFound = keywords
    }
  }
})

export const { setDescriptionService, setTagService, setImageService, setTitleService, SearchServices } = servicesSlice.actions

export default servicesSlice.reducer
