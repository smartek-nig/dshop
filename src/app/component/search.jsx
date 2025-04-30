import { CircleFadingArrowUp } from 'lucide-react'

export default function search(value, handle) {
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='w-3/5 border-4 border-gray-300 rounded-full my-4 flex items-center justify-between px-6'>
        <input type="text" name='product.id' id='product.id' className='outline-none block w-4/5' placeholder='search for goods' onChange={handle}/>

        <CircleFadingArrowUp className='text-lg cursor-pointer w-6 h-6 text-green'/>

        </div>

    </div>
  )
}
