/** Prefix a root-relative path ("/blog/x.jpg") with the site's base URL. */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith(import.meta.env.BASE_URL)) return path
  return import.meta.env.BASE_URL + path.slice(1)
}
