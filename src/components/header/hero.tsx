export default function Hero({
  title,
  description
}: {
  title: string
  description?: string
}) {
  return (
    <header className='px-8 py-16 bg-accent space-y-4'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='opacity-80'>{description}</p>
    </header>
  )
}
