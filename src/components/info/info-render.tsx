import Accordion from '@c/ui/accordion'

type InfoRenderProps = {
  title: string
  description: string[]
  children?: React.ReactNode
}

export default function InfoRender({
  title,
  description,
  children
}: InfoRenderProps) {
  return (
    <Accordion title={title}>
      <article className='font-light'>
        <ul className='space-y-1'>
          {description.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
        {children}
      </article>
    </Accordion>
  )
}
