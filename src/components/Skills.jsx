

import React from 'react'

export default function () {

 const Skills = {
    skills: [{
      name: "HTML",
      level: "Avanzado"
    },{
      name: "CSS",
      level: "Avanzado"
    },
    {
      name: "JavaScript",
      level: "Intermedio"
    },
    {
      name: "ReactJS",
      level: "Intermedio"
    },
    {
      name: "NodeJs",
      level: "Avanzado"
    },
    {
      name: "MongoDB",
      level: "Intermedio"
    },
    {
      name: "Mysql",
      level: "Avanzado"
    },
    {
      name: "Docker",
      level: "Intermedio"
    }
  ]
  }
  
  return (
    <>
    <div className='flex'>
    <div className='w-1/3   text-center'>
    <p className='font-bold text-lg w-40 ml-2 mt-2 bg-blue-50 p-1 rounded-xl'> Habilidades</p>
    <p className='flex-wrap flex'> 
    {Skills.skills.map((skill, index) => (
        <p className=' mt-2 w-1/2' key={index}>
          <p>{skill.name + `: `+ skill.level} </p>
        </p>
      ))}
    </p>
    
    </div>
   
    </div>
    </>
  )
}




