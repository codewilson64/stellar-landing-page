import books from '../assets/books.png'

const BooksShowcase = () => {
  return (
    <div className='px-5 py-10 bg-slate-200/50 lg:rounded-2xl'>
      <h1 className='font-bold text-3xl text-center text-black mb-6'>Lots of Books to Read</h1>
      <p className='font-normal text-lg text-center text-black mb-6'>Get new insights everyday by reading our summary books from Self-Growth, Health, Money and many other categories.</p>

      <div className='w-[330px] overflow-hidden mx-auto'>
        <img src={books} alt="books" className='w-full'/>
      </div>
    </div>
  )
}

export default BooksShowcase