import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { withBase } from '../lib/withBase'
import styles from './Layout.module.css'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={styles.shell}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${withBase('/images/beach-bg.jpg')})` }}
        aria-hidden="true"
      />
      <div className={styles.wash} aria-hidden="true" />
      <main className={styles.content}>
        <Outlet />
      </main>
      <footer className={styles.credit}>background art: seisyun bot</footer>
    </div>
  )
}
