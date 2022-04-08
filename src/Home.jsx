import { useState } from 'react'
import Me from './Me'
import DownloadBanner from './DownloadBanner'

function Home() {

  return (
    <div className="p-10 border-2 border-red-500">
      <p className="text-3xl">Welcome to My (davin clark) Website</p>
      <Me />
      <DownloadBanner />
    </div>
  )
}

export default Home
