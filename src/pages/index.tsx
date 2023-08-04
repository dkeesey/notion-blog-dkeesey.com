import Header from '../components/header'
import ProfilePic from '../components/ProfilePic'
import styles from './Home.module.css'

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
        <p>Welcome! 👋</p>
        <p>
          I'm Dean, a seasoned engineer with 15+ years of experience delivering
          web and mobile application design, driving digital transformations for
          Fortune 500 corporations and non-profit organizations alike.
        </p>

        {/* rest of the code */}
      </div>
    </>
  )
}
