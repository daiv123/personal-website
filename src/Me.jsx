import photo from './photos/me.jpg';
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import AdSquare from './AdSquare';



export default function Me () {
  const [spin, setSpin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      <div className="flex flex-row flex-wrap p-5 border-2 border-dashed">
        <div className="flex flex-col items-center max-w-fit bg-red-500 p-10 border-8 border-dashed border-slate-500">
          <img src={photo} alt="me" 
            className={"w-64" + (spin?" animate-spin":"")} 
            onClick={() => setSpin(!spin)}
          />
        </div>
        {/* <AdSquare /> */}
        <div className="m-auto bg-gray-500 border-2 border-slate-500">
          <p className="bg-blue-400 p-5 h-fit">ad</p>
        </div>
      </div>

      <span className="text-2xl">This is a photo of what I look like </span>
      <span onClick={() => setModalOpen(!modalOpen)} className='text-2xl'>(Click Me!)</span>
      <Popup open={modalOpen}
        position="top center"
        modal
        nested
      >
        <div className='bg-purple-300 border-4 border-slate-500 border-dashed px-20 py-10'>
          <p className='text-3xl'>I meant the photo :P</p>
          <button className='bg-red-500 text-white p-2 rounded-full' onClick={() => setModalOpen(!modalOpen)}>
            Close
          </button>
        </div>
      </Popup>

      <p>
        "I am a software engineer with a passion for building 
        things that people love. I love to code and I am a huge 
        fan of the open source community." - github copilot
      </p>
      <p> 
        
      </p>
    </div>
  );
}