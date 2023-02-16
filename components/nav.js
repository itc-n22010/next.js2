import Link from 'next/link'
import styles from 'styles/nav.module.css'
export default function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <Link href='/about'>about</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
