import { useParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Panel from '../components/Panel'
import PhotostripPair from '../components/PhotostripPair'
import ProjectDetail from '../components/ProjectDetail'
import { getProject } from '../content/projects'
import styles from './Page.module.css'
import panelText from './PanelText.module.css'

export default function Portfolio() {
  const { projectId } = useParams()
  const project = projectId ? getProject(projectId) : undefined

  return (
    <div className={styles.stage}>
      <div className={styles.content}>
        <PageTitle>portfolio</PageTitle>
        <Panel
          label={project ? 'project' : 'project name'}
          className={styles.projectPanel}
        >
          {project ? (
            <ProjectDetail key={project.id} project={project} />
          ) : (
            <p className={panelText.hint}>
              {projectId
                ? "hmm, i couldn't find that one. "
                : ''}
              tap a photo on the strips to read about a project.
            </p>
          )}
        </Panel>
      </div>
      <PhotostripPair selectedId={project?.id} />
    </div>
  )
}
