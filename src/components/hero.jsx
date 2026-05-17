import IllustrationImg from "../image/me.png";
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[100vh] flex flex-col justify-center bg-white px-6 md:px-20 ">
      <div className="w-full flex flex-row items-center">
        <div className="w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
            Hi, I'm Kaneeswari K
          </h1>

          <p className="text-lg md:text-2xl text-purple-700 mb-4">
            Aspiring MERN Stack Developer
          </p>

          <p className="max-w-xl text-gray-600 leading-7">
            I build responsive web applications using MERN Stack technologies.
          </p>

          <div className="mt-8">
            <a href="/Kaneeswari_MERN_Stack_Resume.pdf"
            download="Kaneeswari_MERN_Stack_Resume.pdf"
             className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
              Hire Me
            </a>
          </div>
        </div>

        <div className="w-1/2 mx-20">
          <img
            src={IllustrationImg}
            alt="Illustration"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
