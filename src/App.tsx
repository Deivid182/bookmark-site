import Download from './components/download'
import Footer from './components/footer'
import Header from './components/header'
import Questions from './components/questions'
import Showcase from './components/showcase'
import Subscribe from './components/subscribe'
import Tabs from './components/tabs'
import { Toaster } from './components/ui/toaster'

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Tabs />
      <Download />
      <Questions />
      <Subscribe />
      <Toaster />
      <Footer />
    </>
  )
}

export default App