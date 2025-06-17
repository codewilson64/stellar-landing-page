import Hero from '../components/Hero'
import Comparison from '../components/Comparison'
import BooksShowcase from '../components/BooksShowcase'
import Download from '../components/Download'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BooksShowcase />
      <Comparison />
      <Download />
    </div>
  )
}

export default HomePage