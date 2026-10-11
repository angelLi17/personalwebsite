import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Panel from '../components/Panel'
import { formatDate } from '../lib/formatDate'
import { getPost } from '../lib/posts'
import { withBase } from '../lib/withBase'
import styles from './Page.module.css'
import text from './PanelText.module.css'

const corner = [
  { to: '/blog', text: 'all posts' },
  { to: '/', text: 'home' },
]

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  return (
    <div className={styles.content}>
      <PageTitle>blog</PageTitle>
      <Panel label={post?.title ?? 'not found'} corner={corner} className={styles.widePanel}>
        {post ? (
          <article className={styles.readable}>
            <time className={text.date} dateTime={post.date.toISOString()}>
              {formatDate(post.date)}
            </time>
            <div className={text.prose}>
              <Markdown
                components={{
                  img: ({ src, alt }) => <img src={src ? withBase(src) : src} alt={alt ?? ''} />,
                  a: ({ href, children }) =>
                    href?.startsWith('http') ? (
                      <a href={href} target="_blank" rel="noreferrer">
                        {children}
                      </a>
                    ) : (
                      <a href={href ? withBase(href) : href}>{children}</a>
                    ),
                }}
              >
                {post.body}
              </Markdown>
            </div>
          </article>
        ) : (
          <p className={text.hint}>hmm, i couldn't find that post.</p>
        )}
      </Panel>
    </div>
  )
}
