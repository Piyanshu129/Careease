import Image from 'next/image'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorksPage from './components/HowItWorksPage'
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FAQ from './components/FAQ';
import FloatingNavbar from './components/FloatingNavbar';
import ServicesPage from './components/ServicesPage';


export default function Home() {
  return (
    <main>
      <FloatingNavbar/>
     {/* <Navbar /> */}
     <HomePage/>
    
    <AboutUs
      title="Healthcare with a renewed perspective on life."
      subtitle="At CareEase, we are dedicated to transforming how healthcare is delivered at home. our platform connects patients with qualified caregivers to provide personalised in-home services, including, post-surgery care, and mother-baby care."
      description="We believe in compassionate, professional care that empowers individuals to receive healthcare in comfort of their Home.  "
      quote="Caring is more than a service; it's a commitment to bring comfort, peace, and dignity to those who need it most."
      imageUrl='/about.jpeg' 
    />
      <WhyChooseUs></WhyChooseUs>
      <ServicesPage></ServicesPage>
    <Footer/>
    
      
      

  </main>
    
  )
}
