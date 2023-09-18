import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './sheet'
import { logoBookmarkLight, facebook, twwiter } from '@/assets'
import { Button } from './button'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='flex items-center justify-center p-2 hover:bg-neutral-300 rounded-md'>
          <Menu className='w-8 h-8'/>
        </div>
      </SheetTrigger>
      <SheetContent side={'top'} className='p-0 h-full'>
        <div className='overflow-y-auto space-y-4 p-4 pb-12 flex flex-col h-full bg-[#252b46] text-white'>
          <div className='flex-1 space-y-2'>
            <a href="/" className='inline-block'>
              <img src={logoBookmarkLight} alt="logo" width={130} height={30} />
            </a>
            <ul className='flex flex-col gap-4'>
              <li className='text-white border-b text-center border-white p-4 cursor-pointer '>Features</li>
              <li className='text-white border-b text-center border-white p-4 cursor-pointer'>Pricing</li>
              <li className='text-white border-b text-center border-white p-4 cursor-pointer'>Contact</li>
              <Button variant={'customOutline'} size={'lg'} className='w-full'>
                Login
              </Button>
            </ul>
          </div>
          <div className='flex items-center justify-center gap-8'>
            <a href="/">
              <img src={facebook} alt="facebook-logo" width={30} height={30} />
            </a>
            <a href="/">
              <img src={twwiter} alt="twitter-logo" width={30} height={30} />
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar