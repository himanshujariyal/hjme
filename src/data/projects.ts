export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  thumb: string        // path relative to /public, e.g. /thumb/jukebox.jpg
  link?: string        // set only for external projects
  external?: boolean
}

export const projects: Project[] = [
  {
    slug: 'jukebox',
    title: 'Jukebox',
    description: 'Music web application.',
    tags: ['Javascript', 'Soundmanager'],
    thumb: '/thumb/jukebox.jpg',
  },
  {
    slug: 'lectut',
    title: 'Lectut',
    description: 'Online study portal.',
    tags: ['UI/UX', 'Angular', 'Grunt', 'Sass'],
    thumb: '/thumb/lectut.jpg',
  },
  {
    slug: 'merchant-panel',
    title: 'Merchant Panel',
    description: 'Minimal functionality POS.',
    tags: ['Angular', 'Sass', 'Yeoman'],
    thumb: '/thumb/mapper.jpg',
  },
  {
    slug: 'inventory-mapper',
    title: 'Inventory Mapper',
    description: 'Product management system.',
    tags: ['Frontend', 'Ui-Grid'],
    thumb: '/thumb/inventory.jpg',
  },
  {
    slug: 'join-img',
    title: 'Join IMG',
    description: 'Recruitment page.',
    tags: ['Frontend', 'UI/UX'],
    thumb: '/thumb/join.jpg',
  },
  {
    slug: 'stars-above-us',
    title: 'Stars Above Us',
    description: 'HTML5 Canvas experiment.',
    tags: ['Frontend', 'Canvas'],
    thumb: '/thumb/stars-above.jpg',
  },
]
