import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Ocean'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
