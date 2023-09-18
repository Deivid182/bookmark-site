import { logoBookmarkLight } from '@/assets'
import Container from './container'
import { facebook, twwiter } from '@/assets'

const Footer = () => {
  return (
    <footer className='py-8 bg-[#252b46]'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center max-lg:gap-16'>
          <div className='flex items-center gap-16 flex-col lg:flex-row flex-1'>
            <a href="/">
              <img
                src={logoBookmarkLight}
                alt='logo'
                width={130}
                height={30}
              />
            </a>
            <ul className='flex max-lg:flex-col items-center gap-6 uppercase'>
              <li className=' hover:text-red-400 duration-150 tracking-widest cursor-pointer text-white'>Features</li>
              <li className='hover:text-red-400 duration-150 tracking-widest cursor-pointer text-white'>Pricing</li>
              <li className='hover:text-red-400 duration-150 tracking-widest cursor-pointer text-white'>Contact</li>
            </ul>
          </div>
          <div className='flex items-center gap-8'>
            <a href="/">
              <img src={facebook} alt="facebook-logo" width={30} height={30} />
            </a>
            <a href="/">
              <img src={twwiter} alt="twitter-logo" width={30} height={30} />
            </a>
          </div>
        </div>
        <div>
        <div className="mt-8">
          <p className="attribution text-center text-neutral-200">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://david-pm.vercel.app/" rel="noreferrer" target="_blank" className='text-white font-medium'>
              David Peralta Mendoza
            </a>
            .
          </p>
        </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer