import PageTitle from '../components/PageTitle'
import Panel from '../components/Panel'
import styles from './Page.module.css'
import text from './PanelText.module.css'

// First draft written from the resume. Rewrite in your own voice!
export default function About() {
  return (
    <div className={styles.content}>
      <PageTitle>about</PageTitle>
      <Panel label="hi, i'm angel" className={styles.widePanel}>
        <div className={`${text.prose} ${styles.readable}`}>
          <p>
            I'm an Electrical Engineering and Computer Science student at UC Berkeley (class of
            2028). Most of my work lives where computer vision meets the real world: I do
            research on grape disease detection at Santa Clara University's EPIC Lab, and I'm
            currently building an OCR workflow to translate Assyrian cuneiform.
          </p>
          <p>
            I also love teaching. I'm on course staff for CS61A, lecture for CubStart iOS, and
            help organize CalHacks with Hackathons at Berkeley.
          </p>
          <h2>things i care about</h2>
          <ul>
            <li>computer vision for women's health radiology</li>
            <li>genetic applications for plant efficiency against climate change</li>
          </ul>
          <h2>off the clock</h2>
          <p>
            Library-hopping around Berkeley, sudoku, graphic design, grocery shopping and
            rollerblading. I speak English and Mandarin.
          </p>
          <h2>say hi</h2>
          <p>
            <a href="mailto:angel_li@berkeley.edu">angel_li@berkeley.edu</a>
            {' · '}
            <a href="https://www.linkedin.com/in/angel-li-yi17/" target="_blank" rel="noreferrer">
              linkedin
            </a>
            {' · '}
            <a href="https://github.com/angelLi17" target="_blank" rel="noreferrer">
              github
            </a>
          </p>
        </div>
      </Panel>
    </div>
  )
}
