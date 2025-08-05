import Hero from '../components/Hero'
import Comparison from '../components/Comparison'
import BooksShowcase from '../components/BooksShowcase'
import Download from '../components/Download'
import PhoneImage from '../components/PhoneImage'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PhoneImage />
      <BooksShowcase />
      <Comparison />
      <Download />
    </div>
  )
}

export default HomePage