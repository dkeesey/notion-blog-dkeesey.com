import Header from '../components/header'
import ProfilePic from '../components/ProfilePic'
import styles from './Home.module.css'
import Link from 'next/dist/client/link'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={styles.layout}>
        <ProfilePic />
        <h1>Dean A. Keesey</h1>
        <h2>
          Full-stack JavaScript & UI Engineer |<br />
          AWS Solutions Architect Associate
        </h2>
        <div className={styles.bodyText}>
          <h3>Welcome! 👋</h3>
          <p>
            I'm Dean, a seasoned engineer with 15+ years of experience
            delivering web and mobile application design, driving digital
            transformations for Fortune 500 corporations and non-profit
            organizations alike.
          </p>
          <p>
            Through leveraging my vast UI/UX engineering expertise and a
            certification in cloud engineering as an AWS Solutions Architect
            Associate, I create innovative, user-friendly digital experiences
            that enhance customer experience across all touchpoints.
          </p>
          <p>
            In my diverse career, I've founded and developed the{' '}
            <Link href="https://www.masumihayashifoundation.org">
              Masumi Hayashi Foundation
            </Link>
            , worked on large-scale client websites at Agency.com, and delivered
            complex licensing contracts at Oracle Corporation. I've also
            designed 3D motion graphics for ESPN's international coverage and
            resolved critical defects in e-commerce applications.
          </p>

          <p>
            Explore my <Link href="/blog">blog</Link> to read more about my
            thoughts on technology, innovation, and the intersection of art and
            tech.
          </p>
          <p>
            Looking for a proven engineer to help deliver your next project? Get
            in touch and let's discuss how we can work together!{' '}
            <Link href="/contact">Let's connect!</Link>
          </p>
        </div>

        {/* rest of the code */}
      </div>
    </>
  )
}
