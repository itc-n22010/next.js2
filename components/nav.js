import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <ul>
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
