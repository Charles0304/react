
export default function MyList({title, imgUrl, content}) {
  return (
    <div className='flex border rounded w-full bg-yellow-100'>
        <div className="w-1/4 max-w-40 items-center flex">
            <img src ={imgUrl}  alt="html"/>
        </div>
        <div className="w-3/4 px-5 py-3">
            <h1 className="text-2xl font-medium">{title}</h1>
            <p>{content}</p>
            <p className="w-full flex justify-end mt-5 font-bold items-center">
                <span>❤</span>
                <span className="mx-1">좋아요</span>
                <span>0</span>
            </p>
        </div>
    </div>
  )
}
