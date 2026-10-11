import PageTitle from '../components/PageTitle'
import Panel from '../components/Panel'
import styles from './Page.module.css'
import text from './PanelText.module.css'

export default function NotFound() {
  return (
    <div className={styles.content}>
      <PageTitle>lost at sea</PageTitle>
      <Panel label="404" className={styles.projectPanel}>
        <p className={text.hint}>this page washed away. head back home?</p>
      </Panel>
    </div>
  )
}
