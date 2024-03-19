
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeTfoot from './BoxOfficeTfoot';
//순위 이름 매출 관객 증감율
export default function BoxOfficeTb() {
    
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <caption className='text-xl text font-bold mb-5'>일일 박스오피스 순위</caption>
            <table className='w-4/5 border'>
                <BoxOfficeThead/>
                <BoxOfficeTbody/>
                <BoxOfficeTfoot/>
            </table>
        </div>
    )
}
