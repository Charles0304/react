
export default function GalleryCard({gdata}) {
    let tagarr = []
    if(gdata.galSearchKeyword.includes(",")){
        tagarr = gdata.galSearchKeyword.split(",")
        tagarr = tagarr.map((item,idx) =>
            <span className="inline-block bg-gray-200 
            rounded-full px-3 py-1 text-sm font-semibold
             text-gray-700 mr-2 mb-2" key={idx}>#{item}</span>
        )
    }
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={gdata.galWebImageUrl.replace("http","https")} alt={gdata.galTitle} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{gdata.galTitle}</div>
                <p className="text-gray-700 text-base">
                    {gdata.galPhotographyLocation}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tagarr}
            </div>
        </div>
    )
}
