import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Panel from '../components/Panel'
import { formatDate } from '../lib/formatDate'
import { posts } from '../lib/posts'
import styles from './Page.module.css'
import text from './PanelText.module.css'

export default function Blog() {
  return (
    <div className={styles.content}>
      <PageTitle>blog</PageTitle>
      <Panel label="all posts" className={styles.widePanel}>
        {posts.length === 0 ? (
          <p className={text.hint}>nothing here yet, check back soon.</p>
        ) : (
          <ul className={`${text.postList} ${styles.readable}`}>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className={text.postLink}>
                  <time className={text.date} dateTime={post.date.toISOString()}>
                    {formatDate(post.date)}
                  </time>
                  <h3 className={text.postTitle}>
                    {post.title}
                    {post.draft && <span className={text.draft}>draft</span>}
                  </h3>
                  {post.summary && <p className={text.summary}>{post.summary}</p>}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  )
}
