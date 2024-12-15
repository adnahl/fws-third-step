import Hero from '@/components/header/hero'

export default function HomePage() {
  return (
    <section className='space-y-12'>
      <Hero title='Information about the challenge' />

      <div className='space-y-6'>
        <h2 className='text-lg text-center tracking-wider'>
          Challenge Information
        </h2>

        <div className='space-y-2'>
          {/* 
					<ChallengeInfo />
          <SolutionInfo />
          <ProcessInfo /> 
					*/}
        </div>
      </div>
    </section>
  )
}
