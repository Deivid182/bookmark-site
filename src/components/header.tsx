import Container from './container'
import { logoBookmark } from '@/assets'
import { Button } from './ui/button'
import MobileSidebar from './ui/mobile-sidebar'

const Header = () => {
  return (
    <div className='header w-full z-20'>
      <Container>
        <nav className='py-4 flex items-center justify-between'>
          <a href="/">
            <img
              src={logoBookmark}
              alt='logo'
              width={130}
              height={30}
            />
          </a>
          <ul className='max-lg:hidden flex items-center gap-x-4 uppercase'>
            <li className=' hover:text-red-400 duration-150 tracking-widest cursor-pointer'>Features</li>
            <li className='hover:text-red-400 duration-150 tracking-widest cursor-pointer'>Pricing</li>
            <li className='hover:text-red-400 duration-150 tracking-widest cursor-pointer'>Contact</li>
            <Button 
              variant={'destructive'} 
              className='hover:bg-white transition-colors hover:text-red-400 uppercase tracking-widest'
            >
              Login
            </Button>
          </ul>
          <div className='lg:hidden h-full'>
            <MobileSidebar />
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header