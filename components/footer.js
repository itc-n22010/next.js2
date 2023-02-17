import Logo from 'components/logo'
import Social from 'components/social'
import styles from 'styles/footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Logo />
        <Social />
      </div>
    </footer>
  )
}
