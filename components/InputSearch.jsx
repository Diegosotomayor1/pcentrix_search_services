import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchServices } from '../features/servicesSlice'

const InputSearch = () => {
  const dispatch = useDispatch()
  const servicios = useSelector(state => state.data.services)
  const results = useRef()
  const MaxLenghtKeywords = 5
  const ResultsScreen = (results) => {
    const keywordsScreen = []
    results.forEach((keyword, index) => {
      if(index < MaxLenghtKeywords) keywordsScreen.push(keyword)
    })
    return keywordsScreen

  }
  const ChangeInputService = async e => {
    await dispatch(SearchServices(e.target.value))
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
{/*         <p className='text-xs'>Se está buscando: {SearchValue}</p>
 */}        {(ResultsScreen(servicios)).map(result => (
          <div
            key={result.title}
            className='flex flex-row justify-between items-center border-b-[1px] border-gray-300 py-2 cursor-pointer hover:bg-gray-200'
          >
            <p>{result.title}</p>
            <div className='flex justify-end gap-2'>
              {result.tags.map(tag => (
                <span className='bg-gray-300 px-2 py-1 text-xs rounded-md' key={tag}>
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
