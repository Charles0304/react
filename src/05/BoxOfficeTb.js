
import BoxOfficeData from './BoxOffice.json';
import BoxOfficeRow from './BoxOfficeRow';
//순위 이름 매출 관객 증감율
export default function BoxOfficeTb() {
    const myItems = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(item =>
        <BoxOfficeRow rank={item.rank} name={item.movieNm}
            income={item.salesAmt} view={item.audiAcc} inc={item.rankInten} data={item} key={item.movieCd} />
    );
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <caption className='text-xl text font-bold mb-5'>일일 박스오피스 순위</caption>
            <table className='w-4/5 border'>
                <thead>
                    <tr className='text-center bg-slate-300'>
                        <th>순위</th>
                        <th>이름</th>
                        <th>매출(원)</th>
                        <th>관객</th>
                        <th>증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {myItems}
                </tbody>
                <tfoot className=' bg-gray-500 text-yellow-50'>
                    <tr className='text-center'>
                        <td colsPan={5} className='p-2'>
                            자세한 정보는 이름을 클릭하세요
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
