import type { Project } from '../types'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className={styles.detail}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.meta}>
        {project.role}
        {project.dates && <span className={styles.dates}> · {project.dates}</span>}
      </p>
      {project.description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {project.tags.length > 0 && (
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      {project.links && (
        <p className={styles.links}>
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label} ↗
            </a>
          ))}
        </p>
      )}
    </article>
  )
}
