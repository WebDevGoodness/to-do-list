import EditToDo from './EditToDo';

const DisplayToDo = ({ allList, deleteList, startEdit, editIndex, updateList }) => {
    return (
        <div className="mt-4">
            {(allList || []).map((item, index) => (
                <div key={index} className="p-2 my-2 bg-gray-700 rounded">
                    {editIndex === index ? (
                        // If this item is being edited, show the EditToDo component
                        <EditToDo item={item} index={index} updateList={updateList} />
                    ) : (
                        // Otherwise, show the task and the buttons
                        <div className="flex justify-between items-center">
                            <span>{item.myLists}</span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => startEdit(index)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded text-xs"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteList(index)}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DisplayToDo;