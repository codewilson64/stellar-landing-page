import Hero from '../components/Hero'
import Comparison from '../components/Comparison'
import BooksShowcase from '../components/BooksShowcase'
import PhoneImage from '../components/PhoneImage'
import EmailCollection from '../components/EmailCollection'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BooksShowcase />
      <Comparison />
      <PhoneImage />
      <EmailCollection />
    </div>
  )
}

export default HomePage