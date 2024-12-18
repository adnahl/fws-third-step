import { challenge, process, solution } from '@/db/info'
import { getDaysLeft } from '@/utils/helpers/h-dates'
import InfoRender from '@/components/info/info-render'

const { endDate, tags } = challenge

export default function ChallengeInfoItems() {
  return (
    <div className='space-y-6'>
      <h2 className='text-lg text-center tracking-wider'>
        Challenge Information
      </h2>
      <div className='space-y-2'>
        <InfoRender title={challenge.title} description={challenge.description}>
          <div className='flex flex-wrap gap-2 mt-4'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='px-2 py-1 bg-accent text-accent-foreground rounded'
              >
                {tag}
              </span>
            ))}
          </div>
          <p className='text-xs text-accent font-ubuntu text-right'>
            <strong>{getDaysLeft(endDate)}</strong> days left |{' '}
            <strong>{endDate}</strong>
          </p>
        </InfoRender>
        <InfoRender title={solution.title} description={solution.description} />
        <InfoRender title={process.title} description={process.description} />
      </div>
    </div>
  )
}
