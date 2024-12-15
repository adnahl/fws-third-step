import { useState } from 'react'

type AccordionProps = {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border border-dotted border-primary'>
      <button
        id={title}
        aria-controls={'section' + title}
        type='button'
        aria-expanded={isOpen}
        className={`w-full cursor-pointer flex items-center justify-between gap-4 hover:text-primary py-4 px-8 ${
          isOpen ? 'border-primary border-dotted border-b' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen ? (
        <div id={'section' + title} aria-labelledby={title} className='p-8'>
          {children}
        </div>
      ) : null}
    </div>
  )
}
