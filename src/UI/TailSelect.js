

export default function TailSelect({ ops, opDefault, selRef, handleChange }) {
    const selList = ops.map(item => <option value={item} key={item}>{item}</option>)
    return (
        <select name="ggs" ref={selRef} onChange={handleChange} className=
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 m-2'>
            <option defaultValue>{opDefault}</option>
            {selList}
        </select>
    );
}
