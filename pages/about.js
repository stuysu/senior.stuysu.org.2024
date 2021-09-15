import about from '../styles/About.module.scss'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="container">
        <Navbar />

        <h1 className={"text-center" + " " + about.title}>About</h1>

        <Footer />
    </div>
  )
}

export default About;