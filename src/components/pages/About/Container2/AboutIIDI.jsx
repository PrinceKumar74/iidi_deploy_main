import container2Pic1 from "../../../../assets/about/container2Pic1.jpg";
import container2Pic2 from "../../../../assets/about/container2Pic2.jpg";
import container2Pic3 from "../../../../assets/about/container2Pic3.jpg";

const AboutIIDI = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          INTERNATIONAL INSTITUTE OF DATA INTELLIGENCE (IIDI)
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
          At the International Institute of Data Intelligence (IIDI), we believe
          that data is the new oil—and human-centric data science is the engine
          that drives transformation. Our mission is to empower professionals,
          students, and organizations to unlock the true potential of data
          through industry-focused, experiential learning. <br></br>With a presence in
          15+ campuses across 2 countries, partnerships with over 50 global
          corporations, and more than 10,000 students trained, IIDI is a hub for
          aspiring data scientists, analysts, and tech professionals.
        </p>

        {/* Why IIDI Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">
            <span className="border-b-3 border-[#b42638] pb-2">Why Choose IIDI?
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-12">
          Cutting-edge Certification Programs
          From Data Science and Financial Analytics to Full Stack Development and HR Analytics, our programs are tailored to industry demands and constantly updated with the latest tools and technologies.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={container2Pic1}
                alt="Schools and colleges"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                Real-World Projects & Assignments

                </h3>
                <p className="text-gray-700">
                Learners work on 18+ real-life industry projects and 25+ graded assignments to ensure hands-on experience that directly translates to on-the-job success.

                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={container2Pic2}
                alt="Facts and figures"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                Placement & Job Readiness Support

                </h3>
                <p className="text-gray-700">
                Our dedicated placement cell and Job Readiness Program provide resume-building, mock interviews, soft skills training, and access to 5000+ hiring partners.

                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={container2Pic3}
                alt="Locations and facilities"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                Global Reach, Local Impact

                </h3>
                <p className="text-gray-700">
                Whether you're in India or abroad, our flexible learning paths, global curriculum, and hybrid learning model bring world-class education to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIIDI;
