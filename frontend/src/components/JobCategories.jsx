export default function JobCategories() {
  const categories = [
    { name: "Technology", icon: "💻", count: 1243 },
    { name: "Healthcare", icon: "🏥", count: 873 },
    { name: "Finance", icon: "💰", count: 642 },
    { name: "Education", icon: "🎓", count: 528 },
    { name: "Marketing", icon: "📊", count: 317 },
    { name: "Design", icon: "🎨", count: 295 },
    { name: "Customer Service", icon: "🤝", count: 264 },
    { name: "Sales", icon: "📈", count: 189 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <a
          key={index}
          href="#"
          className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow text-center"
        >
          <div className="text-3xl mb-2">{category.icon}</div>
          <h3 className="font-medium mb-1">{category.name}</h3>
          <p className="text-sm text-gray-500">{category.count} jobs</p>
        </a>
      ))}
    </div>
  );
}
