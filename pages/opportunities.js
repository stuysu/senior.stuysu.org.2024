import opportunities from '../styles/Opportunities.module.scss'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Opportunities = () => {
  return (
    <div className="container">
        <Navbar />

        <h1 className={"text-center" + " " + opportunities.title}>Opportunities</h1>

        <Footer />
    </div>
  )
}

export default Opportunities;