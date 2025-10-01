import React from "react";

const galleryItems = [
  { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgysLj2SPRZd68gAj3_iaccIxyTof-at316w&s", alt: "Gallery 1" },
  { id: 2, img: "https://w0.peakpx.com/wallpaper/961/274/HD-wallpaper-arijit-singh-concert-feels-singer.jpg", alt: "Gallery 2" },
  { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgysLj2SPRZd68gAj3_iaccIxyTof-at316w&s", alt: "Gallery 3" },
  { id: 4, img: "https://w0.peakpx.com/wallpaper/961/274/HD-wallpaper-arijit-singh-concert-feels-singer.jpg", alt: "Gallery 4" },
  { id: 5, img: "https://cdn.platinumlist.net/upload/artist/manish_paul_828-orig1546859922.jpg", alt: "Gallery 5" },
  { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw1vBfWNe2MiAZmGvXMBcYJ1i3vXGEHB4cg&s", alt: "Gallery 6" },
  { id: 7, img: "https://cdn.platinumlist.net/upload/artist/manish_paul_828-orig1546859922.jpg", alt: "Gallery 7" },
  { id: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw1vBfWNe2MiAZmGvXMBcYJ1i3vXGEHB4cg&s", alt: "Gallery 8" },
];

const CategoryGrid = () => {
  const [activeTab, setActiveTab] = React.useState("Photos");

  return (
    <section className="mt-6 mb-16">
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
            activeTab === "Photos"
              ? "bg-white text-[#120a1f]"
              : "bg-transparent border border-gray-700 text-white"
          }`}
          onClick={() => setActiveTab("Photos")}
        >
          Photos
        </button>
        <button
          className={`ml-4 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
            activeTab === "Videos"
              ? "bg-white text-[#120a1f]"
              : "bg-transparent border border-gray-700 text-white"
          }`}
          onClick={() => setActiveTab("Videos")}
        >
          Videos
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative w-full aspect-square">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03]">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;