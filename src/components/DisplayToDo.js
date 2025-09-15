

function DisplayToDo({ deleteList, allList }) {
    return (
        <>
            {allList.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-3">
                    <p>{item.myLists}</p>

                    <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-600">✏️</button>
                        <button onClick={() => deleteList(index)} className="text-red-500 hover:text-red-600">🗑️</button>
                    </div>

                </div>
            ))}
        </>
    )
}

export default DisplayToDo