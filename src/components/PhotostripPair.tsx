import { projects } from '../content/projects'
import Photostrip from './Photostrip'
import styles from './PhotostripPair.module.css'

export default function PhotostripPair({ selectedId }: { selectedId?: string }) {
  const left = projects.filter((project) => project.strip === 'left')
  const right = projects.filter((project) => project.strip === 'right')

  return (
    <div className={styles.pair}>
      <Photostrip projects={left} selectedId={selectedId} className={styles.left} />
      <Photostrip projects={right} selectedId={selectedId} className={styles.right} />
    </div>
  )
}
