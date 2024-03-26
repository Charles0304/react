export default function TailButton({ caption, handleClick, color }) {
    let colours = "bg-green-500 bg-red-500 bg-yellow-500 bg-purple-500 bg-orange-500 bg-blue-500"
    let colours2 = "hover:bg-green-700 hover:bg-red-700 hover:bg-yellow-700 hover:bg-purple-700 hover:bg-orange-700 hover:bg-blue-700"
    return (
      <button className={`px-4 py-2 m-2 bg-${color}-500 text-white items-center justify-center rounded-md flex 
      hover:bg-${color}-700`} onClick={handleClick}>
        {caption}
      </button>
    );
  }
  