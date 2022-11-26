import Layout from '../components/Layout'
import InputSearch from '../components/InputSearch'
import Navbar from '../components/Navbar'
import ServicesList from '../components/ServicesList'
export default function Home () {
  return (
    <Layout>
      <Navbar />
      <div className='mt-[150px] flex flex-col justify-center items-center'>
        <h3 className='text-xl text-white font-medium mb-5'>
          Busca el servicio que necesites:
        </h3>
        <InputSearch />
        <ServicesList />
      </div>
    </Layout>
  )
}
