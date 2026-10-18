import { projects } from '../content/projects'
import Photostrip from './Photostrip'
import styles from './PhotostripPair.module.css'

export default function PhotostripPair({ selectedId }: { selectedId?: string }) {
  const left = projects.filter((project) => project.strip === 'left')
  const right = projects.filter((project) => project.strip === 'right')
  // The shorter strip gets blank frames so both strips stay the same length.
  const length = Math.max(left.length, right.length)

  return (
    <div className={styles.pair}>
      <Photostrip projects={left} length={length} selectedId={selectedId} className={styles.left} />
      <Photostrip projects={right} length={length} selectedId={selectedId} className={styles.right} />
    </div>
  )
}
