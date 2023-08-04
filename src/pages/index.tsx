import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import ProfilePic from '../components/ProfilePic'
import styles from './Home.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <ProfilePic />
        <h1>Dean A. Keesey</h1>
        <h2>
          Full-stack JavaScript & UI Engineer |<br />
          AWS Solutions Architect Associate
        </h2>

        {/* rest of the code */}
      </div>
    </>
  )
}
