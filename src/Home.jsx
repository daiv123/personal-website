import { useState } from 'react'
import Me from './Me'
import DownloadBanner from './DownloadBanner'
import About from './About'

import DavinClark from '/text_art/davin_clark.png';
import MySuper from '/text_art/my_super.png';

function Home() {

  return (
    <div className="p-10 border-2 border-red-500 bg-gradient-to-br from-purple-500 to-pink-400 ">
      <img src={DavinClark} alt="Davin Clark" className="w-full" />
      <img src={MySuper} alt="Davin Clark" className="w-full" />
      <Me />
      <DownloadBanner />
      <About />
    </div>
  )
}

export default Home
