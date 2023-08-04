import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import ProfilePic from '../components/ProfilePic'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import LinkedIn from '../components/svgs/linkedin'

declare global {
  interface Window {
    hbspt: any
  }
}

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/dkeesey',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/dkeesey',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/dean-keesey/',
  },
]

export default function Contact() {
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
        <title>Contact – Dean A. Keesey</title>
        <script
          id="hs-script-loader"
          async
          defer
          src="//js.hsforms.net/forms/embed/v2.js"
          onLoad={() => {
            if (window.hbspt) {
              window.hbspt.forms.create({
                region: 'na1',
                portalId: '42523634',
                formId: '43ddda4b-76ec-4cae-b395-d9586b6a9fe0',
              })
            }
          }}
        />
      </Head>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <ProfilePic />

        <h1 style={{ marginTop: '2rem' }}>Contact Me</h1>

        <div className={contactStyles.name}>Dean A Keesey</div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
        <div className={contactStyles.avatar} id="hubspot-form"></div>
      </div>
    </div>
  )
}
