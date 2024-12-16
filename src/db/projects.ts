export type tProject = {
  id: string
  name: string
  description: string
  bodyPath: string
}

export const projects: tProject[] = [
  {
    id: '1',
    name: 'Project One',
    description: 'This is project one',
    bodyPath: '/src/assets/p1.md'
  },
  {
    id: '2',
    name: 'Project Two',
    description: 'This is project two',
    bodyPath: '/src/assets/p2.md'
  }
]
