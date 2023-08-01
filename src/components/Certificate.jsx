import React from 'react'

export default function Certificate() {
    const Certificate = 
        {
          Fecha: "nov 2016",
          Descripcion: "Cursado Primaria y secundaria",
          institucion: "Institucion Educativa General Santander",
          nombre: "Bachiller"
        }
      
  return (
    <>
     <h1 className='font-bold text-lg bg-gray-50 p-2 rounded-xl'>Certificados</h1>
    <div>
      {Object.entries(Certificate).map(([key, value], index) => (
        <p key={index}>
          {key}: {value}
        </p>
      ))}
    </div>
    </>
  )
}

