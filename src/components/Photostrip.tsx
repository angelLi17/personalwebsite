import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { withBase } from '../lib/withBase'
import styles from './Photostrip.module.css'

interface PhotostripProps {
  projects: Project[]
  /** Total frames on the strip; any beyond `projects` render as blank, unclickable frames. */
  length?: number
  selectedId?: string
  className?: string
}

export default function Photostrip({ projects, length = 0, selectedId, className }: PhotostripProps) {
  const blanks = Math.max(0, length - projects.length)

  return (
    <ol className={`${styles.strip} ${className ?? ''}`}>
      {projects.map((project) => {
        const selected = project.id === selectedId
        return (
          <li key={project.id}>
            <Link
              to={`/portfolio/${project.id}`}
              className={`${styles.frame} ${selected ? styles.selected : ''}`}
              aria-current={selected ? 'page' : undefined}
            >
              <span className={styles.photo}>
                {project.image && <img src={withBase(project.image)} alt="" loading="lazy" />}
              </span>
              <span className={styles.caption}>{project.caption}</span>
            </Link>
          </li>
        )
      })}
      {Array.from({ length: blanks }, (_, i) => (
        <li key={`blank-${i}`} aria-hidden="true">
          <span className={styles.frame}>
            <span className={styles.photo} />
            <span className={styles.caption}>&nbsp;</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
