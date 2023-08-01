import React from 'react'
import Photo from '../img/photo.png';
function Profile() {
    const profile = {
        data: {
          name: "Andru Ramirez",
          profession: "FrontEnd y Backend Desarrollo Web",
          address: "Armenia Quindio, Colombia.",
          email: "Rvandruzyzz@gmail.com",
          phone: "323451696",
          photo: Photo,
          
          social: [
            {
              name: "github",
              url: "https://github.com/andrudevv"
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/andrewdev"
            }
          ]
        }
      }
      const dataKeys = Object.keys(profile.data);
    
  return (
    <>
      <section className='font-bold flex flex-row   '>
        <div className='flex items-center justify-center w-1/4'>
          <img src={Photo} alt="" className='w-36 h-36 rounded-full'/>
        </div>

        <div className='p-4 text-1xl m-2'>
        {dataKeys.map((key) => {
          if (key !== "social" && key !=="photo") {
            return (
              <div key={key}>
                <h1>{profile.data[key]}</h1>
              </div>
            );
          }
          return null;
        })}
</div>
<div className='flex flex-col  justify-end font-bold m-2'>
       <p>{profile.data.social[0].name + `: `+ profile.data.social[0].url}</p> 
        <p>{profile.data.social[1].name + `: `+ profile.data.social[1].url}</p>
        </div>
      </section>
    </>
  )
}

export default Profile