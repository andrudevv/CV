import React from 'react'

export default function Academic() {
    const Academy = 
        
            {
              Grado: "6 trimestre",
              Descripcion: "analisis y desarrollo",
              Finalizado: "presente",
              Institucion: "Centro de comercion y turismo Aprendizaje Sena Galan",
              startDate: " marzo 2021"
            }
          
    
  return (
   <>
   <h1 className='font-bold text-lg w-40 mt-2 ml-2 bg-blue-50  p-2 rounded-xl'>Estudios</h1>
    <div>
      {Object.entries(Academy).map(([key, value], index) => (
        <p className='mt-2 ml-2' key={index}>
          {key}: {value}
        </p>
      ))}
    </div></>
  )
}
