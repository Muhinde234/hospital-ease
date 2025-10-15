const FeautureCard = ({Icon,title,description}) => {
  return (
    <div className="p-6 shadow-md  border border-blue-200 rounded-2xl transition-all ">
        <div className="bg-[#00A2E8]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto ">
            <Icon size={28} className="text-[#00A2E8]" />
        </div>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-[15px]">{description}</p>
    </div>
  )
}

export default FeautureCard