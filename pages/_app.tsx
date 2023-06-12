import React from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  
  return (
    <div className='root-app'>
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
