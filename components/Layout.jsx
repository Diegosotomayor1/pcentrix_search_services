const Layout = ({ children }) => {
  return (
    <div className='min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-tl from-[#000] to-[#032115]'>
      {children}
    </div>
  )
}

export default Layout
