"use client";

import React, { useState } from "react";

function pages() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  function submitHandler(e){
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}])
   
    setTitle("");
    setDesc("");
    console.log(mainTask)
  }
  let renderTask=<h2>No Tasks Available </h2>
 if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return <li className="flex items-center justify-between mb-5">
      <div className="flex items-center justify-between mb-5 w-2/3"> 
    <h3 className="font-semibold text-2xl ">{t.title}</h3>
    <h5 className=" text-lg italic">{t.desc}</h5>
    </div>
    <button 
         onClick={()=>{
            deleteHandler(i);
           }} 
       className="bg-red-400 text-white font-bold rounded px-4 py-2" >Delete</button>
    </li>
  })
 }
 const deleteHandler=(i)=>{
  let copyTask=[...mainTask];
  copyTask.splice(i,1);
  setMainTask(copyTask);
 }
  return (
    <div>
      <h1 className="bg-black text-5xl text-center text-white p-5 italic font-semibold">
        Jay's Todo LIST
      </h1>
      <form onSubmit={submitHandler} className="m-3">
        <input
          type="text"
          className="border-2 border-zinc-800 text-2xl m-5 rounded-sm px-4 py-2 "
          placeholder="Enter Task Here"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
      
        />
        <input
          type="text"
          className="border-2 border-zinc-800 text-2xl m-5 rounded-sm px-4 py-2 "
          placeholder="Enter Description here"
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value);
          }}
        />
        <button
        
          className="bg-black  font-bold rounded m-5 text-white px-4 py-2 text-2xl ">
          {mainTask>0 ? () :  }
          Add Task
        </button>
      </form>
      <hr className="m-5"/>
      <div className="p-8 bg-slate-200 m-2 my-10" >
        <ul>{renderTask} </ul>
      </div>
    </div>
  );
}

export default pages;