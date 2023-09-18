
interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 sm:px-10 md:px-20 lg:px-30'>
      {children}
    </div>
  )
}

export default Container 