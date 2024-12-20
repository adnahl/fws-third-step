export type tProject = {
  id: string
  name: string
  description: string
  bodyPath: string
  demosIds?: string[]
}

export const projects: tProject[] = [
  {
    id: '1',
    name: 'Retrospected',
    description:
      'Retrospected is an open-source web application designed for agile retrospectives.',
    bodyPath: '/projects/p1.md',
    demosIds: ['1']
  },
  {
    id: '2',
    name: 'React-Markdown',
    description: 'React component to render markdown.',
    bodyPath: '/projects/p2.md'
  }
]
