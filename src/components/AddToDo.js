import React from 'react'

function AddToDo({addToList, setmyLists, myLists},) {
    return (
        <>
            <div className="flex gap-2 mb-4">
                <input type="text" placeholder="Add To List" onChange={(e)=>setmyLists(e.target.value)} value={myLists} className="flex-1 px-3 py-2 border border-orange-500 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <button onClick={addToList} className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">Add</button>
            </div>    
        </>
    )
}

export default AddToDo