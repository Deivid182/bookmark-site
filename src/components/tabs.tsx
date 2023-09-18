import { useState } from 'react'
import Container from './container'
import { tab1, tab2, tab3 } from '@/assets'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const data = [
  {
    id: 1,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: "Simple Bookmarking",
    image: tab1,
  },
  {
    id: 2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    image: tab2,
  },
  {
    id: 3,
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    image: tab3,
  },
]
const Tabs = () => {


  const [tabs] = useState(data)
  const [value, setValue] = useState(0)

  const { title, desc, link, image } = tabs[value]

  const onClick = (index: number) => {
    setValue(index)
  }

  return (
    <section className='pb-24'>
      <Container>
        <div className='flex flex-col gap-y-6 items-center'>
          <h2 className='capitalize font-medium text-2xl lg:text-3xl'>
            Features
          </h2>
          <p className='text-muted-foreground w-full lg:max-w-lg text-center'>
            Our aim is to make it quick and easy for you to access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
          <div className='flex items-center max-lg:hidden'>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => onClick(index)}
                className={cn('cursor-pointer border-b-2 py-2 px-8 text-center', index === value ? 'border-red-500' : '')}
              >
                {tab.button}
              </div>
            ))}
          </div>
          <div className='hidden max-lg:flex flex-col gap-6 items-center w-full first:border-t-2'>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className='px-20 w-full border-b-2'>
                <div
                  onClick={() => onClick(index)}
                  className={cn('cursor-pointer py-4 text-center', index === value ? 'border-red-500 border-b-4' : '')}
                >
                  {tab.button}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center lg:flex-row gap-y-20 lg:gap-x-8 mt-12'>
          <div className='flex-1 relative'>
            <img
              src={image}
              alt='hero'
              width={'100%'}
              height={500}
            />
            <div className='absolute bottom-[-15%] left-[-30%] w-[120%] h-[80%] lg:h-[60%] rounded-r-full bg-indigo-600 z-[-2]' />
          </div>
          <article className='flex-1 h-full space-y-4 max-lg:px-4 flex flex-col max-lg:items-center'>
            <h2 className='capitalize font-medium text-2xl lg:text-3xl max-lg:text-center'>
              {title}
            </h2>
            <p className='text-muted-foreground max-lg:text-center leading-8'>
              {desc}
            </p>
            <div className='flex items-center gap-x-4'>
              <Button variant={'default'} size={'sm'}>
                {link}
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default Tabs