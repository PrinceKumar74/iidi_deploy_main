import aboutHeroSection from "../../../../assets/about/aboutHeroSection.png";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-24 px-4 text-white bg-black/80"
      style={{
        backgroundImage: `url(${aboutHeroSection})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            <span className="border-b-2 border-[#b42638] pb-2">About IIDI</span>
          </h2>

          <p className="md:text-lg leading-relaxed">
            The Institute for Innovation & Data Intelligence (IIDI) is a premier
            education and training provider based in Australia, dedicated to
            empowering individuals with future-ready skills in analytics, data
            science, and technology. We specialize in delivering career-focused
            certification programs designed for university students, early
            professionals, and working individuals seeking to upskill or
            transition into highgrowth fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
