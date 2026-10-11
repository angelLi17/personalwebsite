export interface Post {
  slug: string
  title: string
  date: Date
  summary: string
  draft: boolean
  body: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  /** Short handwritten label under the photostrip frame. */
  caption: string
  title: string
  role: string
  dates: string
  tags: string[]
  /** Each entry renders as its own paragraph. */
  description: string[]
  links?: ProjectLink[]
  /** Path under public/, e.g. "/projects/grapesense.jpg". Blank frame if omitted. */
  image?: string
  /** Which photostrip the project appears on. */
  strip: 'left' | 'right'
}
