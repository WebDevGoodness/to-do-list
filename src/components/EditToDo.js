import { useState } from 'react';

const EditToDo = ({ item, index, updateList }) => {
    const [editedTask, setEditedTask] = useState(item.myLists);

    const handleSave = () => {
        updateList(index, editedTask);
    };

    return (
        <>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    placeholder="Edit your task"
                    className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
                    autoFocus
                />
                <button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Save
                </button>
            </div>
        </>
    )
}

export default EditToDo;