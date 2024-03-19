import React from 'react'

export default function BoxOfficeTfoot() {
    return (
        <>
            <tfoot className=' bg-gray-500 text-yellow-50'>
                <tr className='text-center'>
                    <td colsPan={5} className='p-2'>
                        자세한 정보는 이름을 클릭하세요
                    </td>
                </tr>
            </tfoot>
        </>
    )
}
