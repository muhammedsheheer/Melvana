import Navbar from '@/components/NavBar'
import React from 'react'
import FAQ from './(section)/Faq'
import Footer from '@/components/Footer'

function page() {
  return (
    <section className='w-full h-full justify-center items-center'>
         <Navbar/>
         <FAQ/>
         <Footer/>
    </section>
  )
}

export default page