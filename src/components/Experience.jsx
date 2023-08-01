import React from 'react'

export default function () {
    const Experience = 
        {
          Compañia: "softwash",
          FinLabor: "Actualmente",
          Descripcion: "desarrollo de software",
          Titulo: "Junior",
          Comienzo: "junio 2020"
        }
      
  return (
    <>
    <h1 className='font-bold text-lg bg-blue-50 w-40 text-center  rounded-xl'>Experiencia</h1>
    <div className='flex-wrap flex '>
      {Object.entries(Experience).map(([key, value], index) => (
        <p className='ml-4 mt-2 w-1/2' key={index}>
          {key}: {value}
        </p>
      ))}
    </div>
    </>
  )
}

