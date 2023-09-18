import Container from './container'
import { Button } from './ui/button'
import { illustrationHero } from '@/assets'
const Showcase = () => {
  return (
    <section className='pt-28 pb-12'>
      <Container>
        <div className='flex flex-col-reverse items-center lg:flex-row gap-8'>
          <article className='flex-1 h-full space-y-4 max-lg:px-4 flex flex-col items-center'>
            <h2 className='capitalize font-medium text-2xl lg:text-4xl max-lg:text-center'>
              A simple bookmark manager
            </h2>
            <p className='text-muted-foreground max-lg:text-center leading-8'>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it for
              free.
            </p>
            <div className='flex items-center gap-x-4'>
              <Button variant={'default'} size={'sm'}>
                Get it on Chrome
              </Button>
              <Button variant={'outline'} size={'sm'}>
                Get it on Firefox
              </Button>
            </div>
          </article>
          <div className='flex-1 relative'>
            <img
              src={illustrationHero}
              alt='hero'
              width={'100%'}
              height={500}
            />
            <div className='absolute bottom-0 right-[-20%] w-[100%] h-[80%] lg:h-[60%] rounded-l-full bg-indigo-600 z-[-1]' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Showcase