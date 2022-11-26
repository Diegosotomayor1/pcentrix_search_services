import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='fixed z-10 flex justify-between lg:px-10 top-0 bg-gradient-to-bl from-[#00b68c] to-[#00e8ba] w-full p-5'>
      <div className='logo'>
        <Link href='#' className='text-white font-semibold'>
          Pcentrix | Busca tus reparaciones
        </Link>
      </div>
      <div className='navigation text-white pages font-medium flex flex-end'>
        <Link href='#'>Inicio</Link>
      </div>
    </nav>
  )
}

export default Navbar
