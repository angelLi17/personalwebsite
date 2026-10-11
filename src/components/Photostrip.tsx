import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { withBase } from '../lib/withBase'
import styles from './Photostrip.module.css'

interface PhotostripProps {
  projects: Project[]
  selectedId?: string
  className?: string
}

export default function Photostrip({ projects, selectedId, className }: PhotostripProps) {
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
    </ol>
  )
}
