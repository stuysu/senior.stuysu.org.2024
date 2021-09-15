import newsletters from '../styles/Newsletters.module.scss'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Newsletters = () => {
  return (
    <div className="container">
        <Navbar />

        <h1 className={"text-center" + " " + newsletters.title}>Newsletters</h1>

        <Footer />
    </div>
  )
}

export default Newsletters;