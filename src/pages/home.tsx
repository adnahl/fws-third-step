import Hero from '@/components/header/hero'
import ChallengeInfoItems from '@/components/info/challenge-info-items'

export default function HomePage() {
  return (
    <section className='space-y-12'>
      <Hero title='Information about the challenge' />
      <ChallengeInfoItems />
    </section>
  )
}
