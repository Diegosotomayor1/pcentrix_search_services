import { useSelector } from 'react-redux'
import ServicesItem from './ServicesItem'

const ServicesList = () => {
  const servicios = useSelector(state => state.data.services)
  return (
    <div className='services mt-10 md:max-w-7xl md:px-10  '>
      <div className='flex flex-wrap w-full md:justify-center items-center gap-8  md:flex-row  '>
        {servicios.map((servicio, index) => (
          <ServicesItem key={index} servicio={servicio}  />
        ))}
      </div>
    </div>
  )
}

export default ServicesList
