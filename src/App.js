import "./App.css";
import {
  fullStackData,
  heroSection,
  logo,
  projectSection,
  socialLogo,
} from "./data";

const { logopng, li1, li2, li3, li4, li5, buttonText } = logo;
const { icon1, icon2, icon3, icon4, icon5 } = socialLogo;

const {
  heropng,
  title,
  subTitle,
  text,
  bannerText,
  dataText,
  text1,
  text2,
  text3,
  text4,
} = heroSection;

function App() {
  return (
    <div className="App  bg-slate-900">
      {/* Naver */}
      <nav className="relative container mx-auto p-3">
        {/* Flex Container */}

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src={logopng} alt="Maynudiin Bhuiyan" />
          </div>

          {/* Mune Itam */}
          <div className="hidden md:flex space-x-12 text-gray-300">
            <a
              className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              href=""
            >
              {li1}
            </a>
            <a
              className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              href=""
            >
              {li2}
            </a>
            <a
              className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              href=""
            >
              {li3}
            </a>
            <a
              className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              href=""
            >
              {li4}
            </a>
            <a
              className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              href=""
            >
              {li5}
            </a>
          </div>

          <div className="text-white">
            <button className="font-mono px-4 py-3 border-[#f87171] border rounded-full font-normal hover:bg-[#f87171] hover:text-white transform duration-500 text-[#fde6a3]">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1_KIuP5xv7mjAucMsF99gi8nivWlUJVsS/view?usp=sharing"
              >
                {buttonText}
              </a>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left Itam */}

          <div className="flex flex-col mb-6 space-y-8 md:w-1/2">
            <h1 className="text-4xl font-bold text-center md:text-5xl sm:text-left text-white font-mono">
              {title}
            </h1>
            <p className="text-center text-gray-200 sm:text-left">{text}</p>
            <h3 className="text-4xl font-bold text-center sm:text-5xl md:text-left text-white font-mono">
              {subTitle}
            </h3>
            <button className="font-mono px-4 py-3 border-[#f87171] border rounded-full font-normal hover:bg-[#f87171] hover:text-white transform duration-500 text-[#fde6a3] w-48 mx-auto md:mx-0">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1_KIuP5xv7mjAucMsF99gi8nivWlUJVsS/view?usp=sharing"
              >
                {bannerText}
              </a>
            </button>
          </div>

          {/* Image */}
          <div className="p-10">
            <img
              class="
              mx-auto transform hover:scale-110 duration-500 cursor-pointer"
              src={heropng}
              alt="Maynudiin Bhuiyan"
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}

      <section id="feature" className="pb-10 container mx-auto">
        <div className="container flex flex-col px-4 mx-auto mt-5 space-y-5 md:space-y-0 md:flex-row">
          {/* About */}

          <div className="flex flex-col space-y-5 md:w-1/2">
            <h2 className="max-w-md text-4xl font-mono font-bold text-center md:text-left text-white ">
              About
            </h2>
            <p className="text-center text-gray-200 sm:text-left md:pr-16 text-lg">
              {dataText}
            </p>
          </div>

          {/* Number List */}

          <div className="flex flex-col space-y-5 md:w-1/2">
            {/* List Itam */}
            <div className="flex flex-col space-y-3 md:space-x-6 md:space-y-0 md:flex-row">
              <div className="flex justify-center items-center rounded bg-[#e07884] md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-400">
                  01
                </div>
                <h3 className="font-bold font-sans text-white md:mb-4 mx-4 md:mt-3">
                  Frontend Skills
                </h3>
              </div>
            </div>
            <div>
              <p className="text-center text-gray-200 sm:text-left">{text1}</p>
            </div>

            <div className="flex flex-col space-y-3 md:space-x-6 md:space-y-0 md:flex-row">
              <div className="flex justify-center items-center rounded bg-[#e07884] md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-400">
                  02
                </div>
                <h3 className="font-bold font-sans text-white md:mb-4 mx-4 md:mt-3">
                  Programming Languages
                </h3>
              </div>
            </div>
            <div>
              <p className="text-center text-gray-200 sm:text-left">{text2}</p>
            </div>

            <div className="flex flex-col space-y-3 md:space-x-6 md:space-y-0 md:flex-row">
              <div className="flex justify-center items-center rounded bg-[#e07884] md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-400">
                  03
                </div>
                <h3 className="font-bold font-sans text-white md:mb-4 mx-4 md:mt-3">
                  Backend skills
                </h3>
              </div>
            </div>
            <div>
              <p className="text-center text-gray-200 sm:text-left">{text3}</p>
            </div>

            <div className="flex flex-col space-y-2 md:space-x-6 md:space-y-0 md:flex-row">
              <div className="flex justify-center items-center rounded bg-[#e07884] md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-400">
                  04
                </div>
                <h3 className="font-bold font-sans text-white md:mb-4 mx-4 md:mt-3">
                  Other Skills
                </h3>
              </div>
            </div>
            <div>
              <p className="text-center text-gray-200 sm:text-left">{text4}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testmeal" className="container mx-auto">
        <div class="md:flex  justify-center items-center mx-auto">
          {fullStackData?.slice(0, 3)?.map((n) => (
            <div class="sm:flex md:grid-flow-col items-center mx-auto p-8 bg-[#a8368c] rounded-xl shadow-md space-y-4 lg:w-1/2 md:w-1/2 md:m-5 mb-5">
              <img
                class="rounded-full ring-4 ring-[#f87171] h-20
              mx-auto transform hover:scale-110 duration-500 cursor-pointer"
                src={n?.profil}
                alt="Maynudiin Bhuiyan"
              />
              <div>
                <div>
                  <p class="text-white font-mono font-bold">{n?.name}</p>
                  <p class="font-serif text-[#fde6a3] font-normal px-4 py-1">
                    {n?.subTitle}
                  </p>
                  <p class="text-white font-mono font-bold  py-1 px-3">
                    {n?.title}
                  </p>
                </div>
                <button class="font-mono px-4 py-1 border-[#f87171] border rounded-full font-normal hover:bg-[#f87171] hover:text-white transform duration-500 text-[#fde6a3]">
                  <a href={n?.href}>{n?.buttonText}</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Progect */}
      <section id="project" className="container py-10 mx-auto">
        <h1 className="text-4xl font-bold text-center md:text-5xl sm:text-left text-white font-mono px-3">
          Project
        </h1>
        <p class="text-white font-mono font-bold sm:text-left p-3">
          Creative NFT Portfolio and Landing page. The theme was made with love
          by `frenify`
        </p>

        <div className="">
          {projectSection?.slice(0, 5)?.map((m) => (
            <div class="md:flex m-5 border-[#f87171] border rounded-lg">
              <div class="md:shrink-0">
                <img
                  class="h-48 w-full object-cover md:h-full md:w-96"
                  src={m?.proImage}
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide py-2 rounded-full md:py-1 text-red-400 sm:text-left">
                  {m?.proTitle}
                </div>
                <h3 className="text-4xl py-4 font-bold text-center sm:text-5xl md:text-left text-white font-mono">
                  {m?.proSubTitle}
                </h3>
                <p class="mt-2 text-slate-500 sm:text-left">{m?.proSubText}</p>
                <div className="sm:text-left py-5 space-x-3">
                  <button class="font-mono px-4 py-1 border-[#f87171] border rounded-full font-normal hover:bg-[#f87171] hover:text-white transform duration-500 text-[#fde6a3]">
                    <a target="_blank" href={m?.proHref}>
                      {m?.proButtonText}
                    </a>
                  </button>

                  <button class="font-mono px-4 py-1 border-[#f87171] border rounded-full font-normal hover:bg-[#f87171] hover:text-white transform duration-500 text-[#fde6a3]">
                    <a target="_blank" href={m?.proHref1}>
                      {m?.proButtonText1}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAT */}
      <scetion id="cat">
        <div className="container flex flex-col items-center justify-center px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0 bg-orange-500">
          {/* Headeing */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            LET'S GET YOUR PROJECT STARTED!
          </h2>

          {/* Button */}
          <div>
            <button class="font-mono px-16 py-6 bg-slate-900 border-[#f87171] border rounded-full text-2xl  font-normal hover:bg-[#f87171] hover:text-white transform duration-500 text-[#fde6a3]">
              <a
                target="_blank"
                href="https://www.freelancer.com/u/vactormaynuddin"
              >
                Getting Starterd
              </a>
            </button>
          </div>
        </div>
      </scetion>

      {/* Footer */}

      <footer className="py-10">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* Logo */}

            <div className="pt-2">
              <img src={logopng} alt="Maynudiin Bhuiyan" />
            </div>
            {/* Social Links Container */}
            <div className="flex justify-center space-x-4">
              {/* Link 1*/}

              <a
                target="_blank"
                href="https://www.linkedin.com/in/maynuddin-bhuiyan/"
              >
                <img src={icon5} alt="" className="h-8" />
              </a>
              {/* Link 2*/}

              <a target="_blank" href="https://github.com/uxmain">
                <img src={icon1} alt="" className="h-8" />
              </a>

              {/* Link 3*/}

              <a
                target="_blank"
                href="https://www.facebook.com/mdmyanuddin.bhuiyan.54"
              >
                <img src={icon2} alt="" className="h-8" />
              </a>

              {/* Link 4*/}

              <a
                target="_blank"
                href="https://stackoverflow.com/users/12873599/maynuddin-bhuiyan"
              >
                <img src={icon3} alt="" className="h-8" />
              </a>

              {/* Link 5*/}

              <a target="_blank" href="https://twitter.com/MaynuddinBh">
                <img src={icon4} alt="" className="h-8" />
              </a>
            </div>
          </div>

          {/* List Container */}

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                {li1}
              </a>
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                {li2}
              </a>
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                {li3}
              </a>
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                {li4}
              </a>
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                {li5}
              </a>
            </div>

            <div className="flex flex-col space-y-3 text-white">
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                Careers
              </a>
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                Community
              </a>
              <a
                href=""
                className="px-2 hover:text-[#f87171] duration-500 font-mono font-bold text-xl"
              >
                {" "}
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Input Countainer */}

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-lg focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button class="font-mono px-4 py-4 bg-slate-900 border-[#f87171] border rounded-lg text-2xl  font-normal hover:bg-[#f87171] hover:text-white transform duration-500 text-[#fde6a3]">
                  <a
                    target="_blank"
                    href="https://www.freelancer.com/u/vactormaynuddin"
                  >
                    Go
                  </a>
                </button>
              </div>
            </form>

            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
