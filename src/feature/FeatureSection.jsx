import Container from "../components/layout/Container"
import FeautureCard from "./FeautureCard"
import {sections,services} from "./data/SectionData"
import SectionTitle from "./SectionTitle"


const FeatureSection = () => {
  return (
    <Container className="px-4 sm:px-6 lg:px-8">
      <SectionTitle
      title={sections[0].title}
      description={sections[0].description}
      />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center  ">
        {
          services.map((service, idx) => {
            return(
              <FeautureCard
                key={idx}
                Icon={service.Icon}
                title={service.title}
                description={service.description}
              />
            )
          })
        }
         
      </div>
      


    </Container>
  )
}

export default FeatureSection