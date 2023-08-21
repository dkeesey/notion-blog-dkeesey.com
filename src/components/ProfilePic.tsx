import Image from 'next/legacy/image'
import profilePic from '../../public/dk.jpg'
import styles from './ProfilePic.module.css'

const ProfilePic = () => {
  return (
    <div className={styles.profilePicWrapper}>
      <Image
        className={styles.profilePic}
        src={profilePic}
        alt="Picture of Dean A. Keesey, UI Engineer"
        width={300}
        height={300}
      />
    </div>
  )
}

export default ProfilePic
