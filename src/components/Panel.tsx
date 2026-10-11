import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Panel.module.css'

interface PanelProps {
  /** Handwritten label in the top-left corner. */
  label: string
  /** Handwritten links in the top-right corner. Defaults to a "home" link. */
  corner?: { to: string; text: string }[]
  className?: string
  children: ReactNode
}

export default function Panel({
  label,
  corner = [{ to: '/', text: 'home' }],
  className,
  children,
}: PanelProps) {
  return (
    <section className={`${styles.panel} ${className ?? ''}`}>
      <header className={styles.header}>
        <h2 className={styles.label}>{label}</h2>
        <nav className={styles.corner}>
          {corner.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.text}
            </Link>
          ))}
        </nav>
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
