export default function AmazingStats() {
  const stats = [
    {
      number: "50K+",
      label: "Happy Travelers",
    },
    {
      number: "200+",
      label: "Destinations",
    },
    {
      number: "15+",
      label: "Years Experience",
    },
  ]

  return (
    <div className="absolute -bottom-16  left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white w-[300px] shadow-md rounded-lg px-8 py-6 text-center transition-all duration-300 hover:shadow-lg"
        >
          <div className="text-3xl lexend font-bold text-gray-800 mb-1">{stat.number}</div>
          <div className="text-sm lexend font-medium text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
