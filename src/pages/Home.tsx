import NavMenu from '../components/NavMenu'
import styles from './Page.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
      <NavMenu />
    </div>
  )
}
