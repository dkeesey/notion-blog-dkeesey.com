import ExtLink from './ext-link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>© Dean Keesey 2023</div>
        <div className={styles.myLinks}>
          Check out my other sites:{' '}
          <ExtLink href="https://www.masumihayashifoundation.org">
            Masumi Hayashi Foundation
          </ExtLink>
        </div>
      </footer>
    </>
  )
}
