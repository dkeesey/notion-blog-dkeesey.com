import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'
import profilePic from '../../public/dk.jpg'
import styles from './Home.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <div className={styles.profilePicWrapper}>
          <Image
            className={styles.profilePic}
            src={profilePic}
            alt="Picture of Dean A. Keesey, UI Engineer"
            width={300}
            height={300}
          />
        </div>
        <h1>Dean A. Keesey</h1>
        <h2>
          Full-stack JavaScript & UI Engineer |<br />
          AWS Solutions Architect Associate
        </h2>

        {/* <Features /> */}
        {/* <img
          src="/dk.jpg"
          width="300"
          height="300"
          alt="Picture of Dean A. Keesey, UI Engineer"
        /> */}

        <div className="explanation">
          <p>
            Welcome! I'm Dean Keesey, a seasoned engineer with 15+ years of
            experience delivering web and application design, driving digital
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
            In my diverse career, I've founded and developed the Masumi Hayashi
            Foundation, worked on large-scale client websites at Agency.com, and
            delivered complex licensing contracts at Oracle Corporation. I've
            also designed 3D motion graphics for ESPN's international coverage
            and built features and resolved critical defects in enterprise SaaS
            applications.
          </p>
          <p>
            [Image Suggestions: Images/logos from the Masumi Hayashi Foundation,
            Agency.com, Oracle Corporation, and ESPN.] Animation Suggestions:
            Animate the introduction of the list of your experiences, each one
            fading in sequentially. Another idea could be to have a 'typewriter'
            animation for the introductory text.
          </p>
          <p>
            Explore my blog to read more about my thoughts on technology,
            innovation, and the intersection of art and tech. [Image Suggestion:
            A teaser image or excerpt from your most recent blog post.] Looking
            for a proven engineer to help deliver your next project? Let's get
            in touch! [Button: 'Contact Me' with a link to your contact page or
            email.]
          </p>
        </div>
      </div>
    </>
  )
}
