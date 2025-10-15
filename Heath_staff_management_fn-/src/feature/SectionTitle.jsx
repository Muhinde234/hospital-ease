

const SectionTitle = ({title,description}) => {
  return (
    <div className="text-center max-w-3xl mx-auto mt-32 ">
       <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
       <p  className="text-gray-600 ">{description}</p>
    </div>
  )
}

export default SectionTitle