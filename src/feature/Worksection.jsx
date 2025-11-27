import Container from "../components/layout/Container"
import SectionTitle from "./SectionTitle"
import {sections,workData} from "./data/SectionData"
import WorkCard from "./WorkCard"

const Worksection = () => {
  return (
    <Container className="px-4 sm:px-6 lg:px-8">
        <div className="text-center  mb-16">
            <SectionTitle
            title={sections[1].title}
            description={sections[1].description}
            />
        </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {
          workData.map((work, idx) => {
            return(
              <WorkCard
                key={idx}
                span={idx+1}
                title={work.title}
                description={work.description}
              />
            )
          })
        }
       
      </div>


  </Container>
  )
}

export default Worksection