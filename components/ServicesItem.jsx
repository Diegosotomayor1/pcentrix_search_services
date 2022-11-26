const ServicesItem = ({servicio}) => {
  const TagsLimit = (tags) => {
    const tagsLimit = []
    const maxTags = 3
    tags.forEach((tag, index) => {
      if(index < maxTags ) tagsLimit.push(tag) 
    })
    return tagsLimit
  }
  return (
    <div className='flex flex-col md:max-w-[300px] rounded-2xl bg-white transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-[0_10px_10px_rgba(255,255,255,.1)]'>
      <div className='image_service '>
        <img
          className='rounded-t-2xl h-[300px] w-[300px] object-center object-cover'
          src={servicio.imageService}
        />
      </div>
      <div className='content_service p-5'>
        <h3 className='text-lg font-semibold'>{servicio.title}</h3>
        <p className='text-[13px]'>{servicio.description}</p>
        <div className='meta mt-4 '>
        <div className='meta_tags text-[10px] flex flex-wrap gap-2 flex-row '>
          { TagsLimit(servicio.tags).map(tag => (
                <p className='bg-slate-200 py-1 rounded-md px-2' key={tag}>
                  {tag}
                </p>
          ))
          }
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServicesItem
