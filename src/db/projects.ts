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
    name: 'React-Markdown',
    description: 'React component to render markdown.',
    bodyPath: '/src/assets/projects/p2.md'
  }
]
