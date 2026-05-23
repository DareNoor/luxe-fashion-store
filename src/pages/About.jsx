import { Link } from "react-router-dom"

const stats = [
  { number: "5+", label: "Years of Excellence" },
  { number: "10k+", label: "Happy Customers" },
  { number: "500+", label: "Premium Products" },
  { number: "15+", label: "Cities Across Pakistan" },
]

const team = [
  {
    name: "Ayesha Khan",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    name: "Sara Ahmed",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
  },
  {
    name: "Maha Rizvi",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
  },
]

const About = () => {
  return (
    <div className="min-h-screen bg-cream">

      {/* Header */}
      <div className="bg-gray-900 py-16 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Our Story
        </p>
        <h1 className="font-heading text-5xl text-white">About Luxe</h1>
      </div>

      {/* Story section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="About Luxe"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl text-gray-900 mb-6">
              Fashion that tells your story
            </h2>
            <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
              Luxe was born out of a passion for premium fashion and a deep understanding 
              of the modern Pakistani woman. We believe that every woman deserves to feel 
              confident, elegant, and comfortable in what she wears.
            </p>
            <p className="font-body text-sm text-gray-500 leading-relaxed mb-10">
              From carefully curated lawn suits to handcrafted accessories, every piece 
              in our collection is selected with love and attention to detail. We work 
              directly with skilled artisans across Pakistan to bring you fashion that 
              is both beautiful and meaningful.
            </p>
            <Link
              to="/shop"
              className="inline-block font-body text-sm tracking-widest uppercase bg-gray-900 hover:bg-black text-white px-8 py-4 transition-colors duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-5xl text-gold mb-2">{stat.number}</p>
                <p className="font-body text-xs tracking-widest uppercase text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
            The People Behind Luxe
          </p>
          <h2 className="font-heading text-4xl text-gray-900">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-xl text-gray-900 mb-1">{member.name}</h3>
              <p className="font-body text-xs tracking-widest uppercase text-gold">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-100 py-20 text-center">
        <h2 className="font-heading text-4xl text-gray-900 mb-4">
          Ready to explore?
        </h2>
        <p className="font-body text-sm text-gray-500 mb-8">
          Discover our latest collection and find your perfect style.
        </p>
        <Link
          to="/shop"
          className="inline-block font-body text-sm tracking-widest uppercase bg-gray-900 hover:bg-black text-white px-10 py-4 transition-colors duration-300"
        >
          Shop Now
        </Link>
      </div>

    </div>
  )
}

export default About