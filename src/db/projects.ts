export type tProject = {
  id: string
  name: string
  description: string
  bodyPath: string
}

export const projects: tProject[] = [
  {
    id: '1',
    name: 'Retrospected',
    description:
      'Retrospected is an open-source web application designed for agile retrospectives.',
    bodyPath: '/src/assets/projects/p1.md'
  },
  {
    id: '2',
    name: 'Project Two',
    description: 'This is project two',
    bodyPath: '/src/assets/projects/p2.md'
  }
]
