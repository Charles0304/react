
export default function GalleryCard({gdata}) {
    let tagarr = []
    if(gdata.USAGE_DAY_WEEK_AND_TIME.includes(",")){
        tagarr = gdata.USAGE_DAY_WEEK_AND_TIME.split(",")
        tagarr = tagarr.map((item,idx) =>
            <span className="inline-block bg-gray-200 
            rounded-full px-3 py-1 text-sm font-semibold
             text-gray-700 mr-2 mb-2" key={idx}>#{item}</span>
        )
    }
    else if(gdata.USAGE_DAY_WEEK_AND_TIME===""){

    }
    else{
        tagarr=<span className="inline-block bg-gray-200 
        rounded-full px-3 py-1 text-sm font-semibold
         text-gray-700 mr-2 mb-2" >{gdata.USAGE_DAY_WEEK_AND_TIME}</span>
    }
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={gdata.MAIN_IMG_NORMAL} alt={gdata.TITLE} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{gdata.TITLE}</div>
                <p className="text-gray-700 text-base">
                    {gdata.TRFC_INFO}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tagarr}
            </div>
        </div>
    )
}
