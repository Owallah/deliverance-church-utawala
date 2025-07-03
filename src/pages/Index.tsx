import About from '../components/About'
import Contacts from '../components/Contacts'
import Departments from '../components/Departments'
import DominionSchool from '../components/DominionSchool'
import CoreValues from '../components/Feature'
import Footer from '../components/Footer'
import Giving from '../components/Giving'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Leadership from '../components/Leadership'
import Sermons from '../components/Sermons'
import '../styles/Global.css'

const Index = () => {
  return (
    <div className='app'>
        <Header />
        <main>
            <Hero />
            <CoreValues />
            <About />
            <Sermons />
            <Leadership />
            <Departments />
            <DominionSchool />
            <Giving />
            <Contacts />
        </main>
        <Footer />
    </div>
  )
}

export default Index