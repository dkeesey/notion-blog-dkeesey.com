import React, { useEffect } from 'react'
import Head from 'next/head'

declare global {
  interface Window {
    hbspt: any
  }
}

export default function ContactUs() {
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '42523634',
        formId: '43ddda4b-76ec-4cae-b395-d9586b6a9fe0',
        target: '#hubspot-form',
      })
    } else {
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      document.body.appendChild(script)
      script.addEventListener('load', () => {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '42523634',
          formId: '43ddda4b-76ec-4cae-b395-d9586b6a9fe0',
          target: '#hubspot-form',
        })
      })
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Please fill out the form below and we'll get
        back to you as soon as possible.
      </p>
      <div id="hubspot-form"></div>
    </div>
  )
}
