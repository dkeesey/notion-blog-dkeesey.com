import React from 'react'
import IntersectionObserverDemoComponent from '../components/intersectionObserverDemoComponent'
import 'tailwindcss/tailwind.css' // Import the Tailwind CSS styles

const IntersectionObserverDemoPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl">Intersection Observer Demo Page</h1>
        <IntersectionObserverDemoComponent />
      </div>
    </div>
  )
}

export default IntersectionObserverDemoPage
