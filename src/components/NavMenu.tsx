import { Link } from 'react-router-dom'
import styles from './NavMenu.module.css'

const links = [
  { to: '/about', text: 'about' },
  { to: '/portfolio', text: 'portfolio' },
  { to: '/blog', text: 'blog' },
]

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.name}>angel li</h1>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.text} /</Link>
          </li>
        ))}
        <li>
          <a href="https://github.com/angelLi17" target="_blank" rel="noreferrer">
            github /
          </a>
        </li>
      </ul>
    </nav>
  )
}
