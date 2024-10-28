import Counter from '../context/useContextCount'

export const Body = () => {

    const {count, inc, dec} = Counter()

    return (
    <>
      
    <div className='bg-[#456268] min-h-screen py-[170px] pl-[480px]' >
      
        <div className='bg-[#79A3B1] flex  items-center w-[350px] h-[250px] justify-around rounded-lg p-2'>
        <button onClick={dec} className='text-3xl'>-</button>
        <p className='text-3xl'>Cantidad: {count}</p>
        <button onClick={inc} className='text-3xl'>+</button>
          
        </div>
    </div>
    </>
  )
}
