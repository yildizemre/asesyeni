export default function TrustBar() {
  const brands = [
    { name: 'Phonak', logoImage: '/phonak.png' },
    { name: 'Oticon', logoImage: '/oticon-logo.png' },
    { name: 'Bernafon', logoImage: '/bernafon-logo.wine.png' },
    { name: 'Coselgi', logoImage: '/images-removebg-preview_(1).png' },
  ];

  return (
    <section id="brands" className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm text-gray-500 font-medium mb-6">Güvenilir Markalar</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-gray-100"
            >
              <img
                src={brand.logoImage}
                alt={brand.name}
                className={`${brand.name === 'Bernafon' ? 'h-14' : 'h-10'} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
