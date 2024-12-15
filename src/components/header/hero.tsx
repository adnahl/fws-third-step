export default function Hero({
  title,
  description
}: {
  title: string
  description?: string
}) {
  return (
    <header className='px-8 py-16 bg-accent space-y-2'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p>{description}</p>
    </header>
  )
}
