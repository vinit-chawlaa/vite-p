import React, { useState } from 'react'

const File = () => {

    const [file,setFile] = useState(null)
    const [store,setStore] = useState([])
    const [isopen,setIsopen] = useState(false)



    const handlepreview = () =>{
   setIsopen(!isopen)
    }

    const handlechange = (e) => {
    const files = e.target.files[0]
    setFile(files)
    setStore([...store , files])
    }

  return (
    <div className='flex items-center justify-center flex-col'>
        <h1 className='text-center text-5xl'>File upload</h1>
        <input type="file" onChange={handlechange}/>
        <button onClick={handlepreview} className='px-5 py-2 bg-black text-white cursor-pointer my-5'>{isopen ? 'close' : 'preview'}</button>
        {isopen ? (
          store?.map((item,idx) => (
            <li key={idx}>{item?.name}</li>
          ))
        )
      :
      (
      <div>here you see your items by clicking this preview</div>
      )
      }
    </div>
  )
}

export default File