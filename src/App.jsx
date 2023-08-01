

import Profile from './components/Profile'
import  Skills  from './components/Skills'
import Experience from './components/Experience'
import Academi from './components/Academi'
import PersonaProfile from './components/personaProfile'

// import Certificate from './components/Certificate'

function App() {
  
  const data = {
    interest: ["Backend", "Frontend"],
    languages: [
      {
        name: "Español",
        percentage: "100%",
      },
      {
        name: "English",
        percentage: "40%",
      },
    ],
  };
  return (
    <>
    <div className='flex-col'>
      
    
   <header className='bg-blue-100 rounded-xl border'>
    <Profile/>
   </header>
   <div className='flex-col '>
          <section className='w-[100%]'>
              <div className='bg-green-200 mt-2 rounded-xl h-40 '>
              <PersonaProfile/>
              </div>
                
          </section>

             <section className=' rounded-lg border'>
                <div className=' mt-2 bg-green-200  h-1/3'>
                  
                    <Experience/>
                  
                </div>
                <div className='grid grid-cols-2 mt-3  '>

                <div className=' m-4 bg-green-200'>
                  
                  <Academi/>
                </div>
                
                <div className='   m-4    bg-green-200 
                '>
                  {<Skills/> }

                </div>
                <div className='  m-4  bg-green-200'>
                <p className='font-bold text-lg w-40  m-auto mt-2 ml-2 bg-blue-50 p-1 rounded-xl'> intereses</p>
                  <p className='mt-2 ml-2'>{data.interest[0]}</p>
                  <p className='mt-2 ml-2'>{data.interest[1]}</p>
                </div>
                <div className='  m-4  bg-green-200 '>
                <p className='font-bold text-lg w-40 ml-2 mt-2 bg-blue-50 p-1 rounded-xl'> lenguajes</p>
                <div className='flex'>
                <p className='mt-2 ml-2'>{data.languages[0].name}</p>
                <p className='mt-2 ml-2'>{data.languages[0].percentage}</p>
                <p className='mt-2 ml-2'>{data.languages[1].name}</p>
                <p className='mt-2 ml-2'>{data.languages[1].percentage}</p>
                </div>
                  
                </div>
                </div>
              </section>

   </div>

   </div>
    
    </>
  )
}

export default App
