
export default function TailBall({ num }) {
    const bcolor = [
        'bg-red-500',
        'bg-orange-500',
        'bg-lime-500',
        'bg-blue-500',
        'bg-purple-500',

    ]

    const ballColor = `w-12 h-12 rounded-full flex justify-center items-center
    ${bcolor[parseInt(num/10)]} text-white font-bold text-xl m-2`
    return (
        <div className={ballColor}>
            {num}
        </div>
    )
}
