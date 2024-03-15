import MyDiv3 from './MyDiv3';
export default function MyDiv2(probs) {
  return (
    <div className="w-4/5 h-4/5 flex items-center justify-center 
    bg-yellow-300 text-gray-900 flex-col mb-10">
        <p className='w-4/5 flex justify-start font-bold text-2xl m-10'>
            {`${probs.d1} > ${probs.d2}`}
        </p>
        <MyDiv3 d1={probs.d1} d2={probs.d2} d3={probs.d3}/>
    </div>
  )
}
