const ServicesItem = () => {
  return (
    <div className='flex flex-col md:max-w-[280px] rounded-2xl bg-white transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-[0_10px_10px_rgba(255,255,255,.1)]'>
      <div className='image_service '>
        <img
          className='rounded-t-2xl h-48 w-full object-center object-cover'
          src='https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/298737088_579053273875965_5409945400302907960_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEhn280_fZdUtMttBaD4EPSLnwVe2F403sufBV7YXjTe9PPR5bw_TwWlvor1M2oG7x1ZjAyuIMQtiBeZXQUvlAB&_nc_ohc=tFnrynj2ucUAX9dZnqQ&_nc_ht=scontent.flim28-1.fna&oh=00_AfC9Nqji7w1lgfDS_IIRFq1P4pePJ0EpB4ubv4E8KTOf5A&oe=6383BB6C'
        />
      </div>
      <div className='content_service p-5'>
        <h3 className='text-lg font-semibold'>Mantenimiento</h3>
        <p className='text-[13px]'>
          lorem ipsum dolor ... lorem ipsum dolor ... lorem ipsum dolor ...
          lorem ipsum dolor ...
        </p>
        <div className='meta mt-4 '>
          <div className='meta_tags text-[10px] flex flex-wrap gap-2 flex-row '>
            <p className='bg-slate-200 py-1 rounded-md px-2'>
              Mantenimiento pc
            </p>
            <p className='bg-slate-200 py-1 rounded-md px-2'>Limpieza</p>
            <p className='bg-slate-200 py-1 rounded-md px-2'>
              Cambio de pasta térmica
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesItem
