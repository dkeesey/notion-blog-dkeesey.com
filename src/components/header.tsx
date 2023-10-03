import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
]

const getPageMetadata = (pathname: string) => {
  switch (pathname) {
    case '/':
      return {
        title: 'Home Page',
        description: 'Welcome to the home page',
      }
    case '/blog':
      return {
        title: 'Blog Page',
        description: 'Read our latest blog posts',
      }
    case '/contact':
      return {
        title: 'Contact Page',
        description: 'Get in touch with us',
      }
    default:
      return {
        title: 'DeanKeesey.com',
        description: 'Personal/Professional website and blog of Dean A Keesey',
      }
  }
}

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()
  const { title, description } = getPageMetadata(pathname)

  return (
    <header className={styles.header}>
      <Head>
        {/* Google Tag Manager */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PZJLR38V');
              `,
          }}
        />
        {/* End Google Tag Manager */}
        ...
        <title>
          {titlePre ? `${titlePre} | DeanKeesey.com` : 'DeanKeesey.com'}
        </title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page} legacyBehavior>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
