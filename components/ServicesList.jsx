import ServicesItem from './ServicesItem'

const ServicesList = () => {
  return (
    <div className='services mt-10 md:max-w-7xl md:px-10  '>
      <div className='flex flex-wrap w-full md:justify-center items-center gap-8  md:flex-row  '>
        {[1, 2, 3, 4, 5].map((service, index) => (
          <ServicesItem key={index} />
        ))}
      </div>
    </div>
  )
}

export default ServicesList
