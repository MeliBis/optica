import FrequentQuestionSection4 from '../Components/Home/Section4FrequentQuestion'
import GalerySection2 from '../Components/Home/Section2Gallery'
import IntroSection1 from '../Components/Home/IntroSection1'
import Section3Testimonials from '../Components/Home/Section3Testimonials'
import SectionCarrousel from '../Components/Home/SectionCarrousel'
import Section2Gallery from '../Components/Home/Section2Gallery'

const HomePage = () => {
  return (
    <div className='container-fluid mb-5'>
      <SectionCarrousel/>
      <IntroSection1/>
      <Section2Gallery/>
     
      <FrequentQuestionSection4/>
    </div>
  )
}

export default HomePage