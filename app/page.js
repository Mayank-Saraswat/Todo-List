"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [mainTask, setMainTask] = useState([])
  const [btn, setBtn] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setTitle('')
    setDesc('')
  }

const deleteHandler = (index) =>{
  let copyTask = [...mainTask]
  copyTask.splice(index,1)
  setMainTask(copyTask)
  setBtn('')
}

  let renderTask = <h2>No data available</h2>

  if(mainTask.length >0){
    renderTask = mainTask.map((task, index) => {
      return <li key={index} className='flex items-center justify-center'>
        <div className='flex justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{task.title}</h5>
          <h6 className='text-lg font-medium'>{task.desc}</h6>
        </div>
        <button onClick={() =>{deleteHandler(index)}} value={btn} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    })
  }
 
  return (
    <>
      <h1 className='bg-blue-400 text-center text-4xl m-2 p-2 font-bold'>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-4 px-4 py-2 m-6 rounded'
          placeholder='Enter task here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          type='text'
          className='text-2xl border-zinc-800 px-4 py-2 m-6 border-4 rounded'
          placeholder='Enter description here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />
        <button className='bg-black text-white text-2xl m-2 px-2 py-3 rounded'>
          Add Task
        </button>
        <hr />
        <div className='m-2 p-5 bg-slate-200'>
          {renderTask}
        </div>
      </form>
    </>
  )
}

export default page