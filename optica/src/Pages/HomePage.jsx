import FrequentQuestionSection4 from '../Components/Home/Section4FrequentQuestion'
import GalerySection2 from '../Components/Home/Section2Gallery'
import IntroSection1 from '../Components/Home/IntroSection1'
import Section3Testimonials from '../Components/Home/Section3Testimonials'
import SectionCarrousel from '../Components/Home/SectionCarrousel'
import Section2Gallery from '../Components/Home/Section2Gallery'
import ServicesPage from './ServicesPage'

const HomePage = () => {
  return (
    <div className='mb-5'>
      <SectionCarrousel/>
      <IntroSection1/>
      <ServicesPage/>
      <Section2Gallery/>
     <Section3Testimonials/>
      <FrequentQuestionSection4/>
    </div>
  )
}

export default HomePage