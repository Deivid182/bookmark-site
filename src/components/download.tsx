import Container from './container'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { chrome, firefox, opera, bgDots } from '@/assets'

const Download = () => {
  return (
    <div className='pb-12 lg:pb-32'>
      <Container>
        <div className='flex flex-col gap-y-6 items-center'>
          <h2 className='capitalize font-medium text-2xl lg:text-3xl'>
          Download the extension
          </h2>
          <p className='text-muted-foreground w-full lg:max-w-lg text-center'>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
            you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
          <div className='grid lg:grid-cols-3 gap-8'>
            <Card>
              <CardHeader className='space-y-8 flex flex-col items-center'>
                <div className='flex items-center justify-center'>
                  <img 
                    src={chrome}
                    alt='chrome'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='space-y-4 text-center'>
                  <CardTitle>
                    Add to Chrome
                  </CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Minimum version 62
                  </CardDescription>
                </div>
                <CardContent className='pt-4 pb-2'>
                  <img
                    src={bgDots}
                    alt='dots'
                    width={100}
                    height={20}
                    className='w-full object-contain'
                  />
                </CardContent>
                <CardFooter className='w-full'>
                  <Button className='w-full' size={'lg'}>
                    Add & Install Extension
                  </Button>
                </CardFooter>
              </CardHeader>
            </Card>
            <Card className='lg:transform lg:translate-y-10'>
              <CardHeader className='space-y-8 flex flex-col items-center'>
                <div className='flex items-center justify-center'>
                  <img 
                    src={firefox}
                    alt='chrome'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='space-y-4 text-center'>
                  <CardTitle>
                    Add to Firefox
                  </CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Minimum version 62
                  </CardDescription>
                </div>
                <CardContent className='pt-4 pb-2'>
                  <img
                    src={bgDots}
                    alt='dots'
                    width={50}
                    height={20}
                    className='w-full object-contain'
                  />
                </CardContent>
                <CardFooter className='w-full'>
                  <Button className='w-full' size={'lg'}>
                    Add & Install Extension
                  </Button>
                </CardFooter>
              </CardHeader>
            </Card>
            <Card className='lg:transform lg:translate-y-20'>
              <CardHeader className='space-y-8 flex flex-col items-center'>
                <div className='flex items-center justify-center'>
                  <img 
                    src={opera}
                    alt='chrome'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='space-y-4 text-center'>
                  <CardTitle>
                    Add to Opera
                  </CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    Minimum version 62
                  </CardDescription>
                </div>
                <CardContent className='pt-4 pb-2'>
                  <img
                    src={bgDots}
                    alt='dots'
                    width={50}
                    height={20}
                    className='w-full object-contain'
                  />
                </CardContent>
                <CardFooter className='w-full'>
                  <Button className='w-full' size={'lg'}>
                    Add & Install Extension
                  </Button>
                </CardFooter>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Download