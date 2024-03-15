

export default function MyDiv3(probs) {
  return (
    <div className="w-4/5 h-4/5 flex items-start 
    bg-yellow-500 text-gray-900 flex-col mb-10">
        <p className='w-4/5 flex justify-start font-bold text-2xl m-10'>
        {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
        </p>
    </div>
  )
}
