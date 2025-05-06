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
            The Data Science course at the International Institute of Data
            Intelligence (IIDI) is carefully designed with input from industry
            experts and professionals. The program follows a rigorous curriculum
            to ensure you gain all the essential skills, along with the right
            guidance to help you land your dream job in data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
