import { useState } from "react";
import DisplayToDo from "./components/DisplayToDo";
import AddToDo from "./components/AddToDo";



const App = () => {
  const [myLists, setmyLists] = useState("");
  const [allList, setallList] = useState([]);
  const [count, setcount] = useState("no")

  
  const addToList = () => {
    let newList = {myLists};
    
    {myLists === "" ? alert("Please enter a task") : 
      setallList([...allList, newList]);
      setmyLists("");
      setcount(allList.length + 1); 
    }
  }

  const deleteList = (listIndex) => {
    let newAllList = [...allList];
    let found = newAllList.filter((itemLists,index)=>(index !== listIndex));
    setallList(found);
    setcount(allList.length - 1);
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">

          <h1 className="text-xl font-bold mb-4">TO-DO LIST</h1>



  <AddToDo addToList={addToList} setmyLists={setmyLists} myLists={myLists} />
      
  <DisplayToDo deleteList={deleteList} allList={allList}/>

          <div><p>You have {count} pending task(s)</p></div>
        </div>
      </div>
    </>
  )
}

export default App;