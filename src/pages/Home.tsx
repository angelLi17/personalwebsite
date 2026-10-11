import NavMenu from '../components/NavMenu'
import PhotostripPair from '../components/PhotostripPair'
import styles from './Page.module.css'

export default function Home() {
  return (
    <div className={styles.stage}>
      <div className={styles.content}>
        <NavMenu />
      </div>
      <PhotostripPair />
    </div>
  )
}
