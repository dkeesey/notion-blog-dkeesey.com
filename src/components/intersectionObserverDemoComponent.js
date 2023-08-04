// components/IntersectionObserverDemoComponent.js
import React, { useEffect } from 'react'

const IntersectionObserverDemoComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')

    hiddenElements.forEach((el) => observer.observe(el))

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect()
  }, [])

  return (
    <iframe src="intersectionObserver/index.html" width="1200" height="800" />
  )
}

export default IntersectionObserverDemoComponent
