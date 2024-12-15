export type tProject = {
  id: string
  name: string
  description: string
  body: string
}

export const projects: tProject[] = [
  {
    id: '1',
    name: 'Project One',
    description: 'This is project one',
    body: 'This is the body of project one'
  },
  {
    id: '2',
    name: 'Project Two',
    description: 'This is project two',
    body: 'This is the body of project two'
  }
]
