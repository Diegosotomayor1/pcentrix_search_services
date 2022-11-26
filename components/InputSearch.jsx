import { useRef, useState } from 'react'

const services = [
  {
    title: 'Mantenimiento',
    tags: ['Limpieza', 'Cambio de pasta térmica', 'cableado']
  },
  {
    title: 'Mantenimiento pc gama baja',
    tags: ['Gama baja', 'Cambio de pasta térmica', 'Limpieza']
  },
  {
    title: 'Mantenimiento gráfica',
    tags: ['Limpieza', 'Limpieza de grafica', 'cableado', 'gpu']
  }
]

const InputSearch = () => {
  const results = useRef()
  const [SearchValue, setSearchValue] = useState()
  const [Results, setResults] = useState([])
  const SearchService = e => {
    const searchValue = e.target.value.toLowerCase()
    setSearchValue(searchValue)
    const keyworks = services.filter(
      service =>
        service.title.toLowerCase().includes(searchValue) ||
        service.tags.find(tag => tag.toLowerCase().includes(searchValue))
    )
    setResults(keyworks)
  }
  const ChangeInputService = e => {
    SearchService(e)
    const resultsClass = results.current.classList
    if (e.target.value === '') return resultsClass.add('hidden')
    results.current.classList.remove('hidden')
  }

  return (
    <div className='relative flex flex-col w-full max-w-[800px]'>
      <input
        type='text'
        className=' text-md text-gray-900 px-5 py-2 rounded-xl outline-none'
        placeholder='Indica el servicio aquí'
        onChange={ChangeInputService}
      />
      <div
        className='absolute hidden flex flex-col justify-center z-10 bg-slate-100 p-2 rounded-xl px-4 w-full top-12 results'
        ref={results}
      >
        <p className='text-xs'>Se está buscando: {SearchValue}</p>
        {Results.map(result => (
          <div
            key={result.title}
            className='flex flex-row justify-between items-center border-b-[1px] border-gray-300 py-2 cursor-pointer hover:bg-gray-200'
          >
            <p>{result.title}</p>
            <div className='flex justify-end gap-2'>
              {result.tags.map(tag => (
                <span className='bg-gray-300 px-2 py-1 text-sm' key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputSearch
