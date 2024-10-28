import React,{useEffect} from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import VanillaTilt from 'vanilla-tilt';
export default function HomePageText() {
  let arrayShowingWhoIDo = [
    "Web Developer 🧑‍💻",
    "Software Engineer😊",
    "Tech Enthusiastic 🤩 ",
    "Node.js Developer 🔥",
    "UX/UI Enthusiast ⚜️",
  ];
  const [text] = useTypewriter({
    words: arrayShowingWhoIDo,
    delay: 150,
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 100,
    deleteSpeed: 70,
  });
  useEffect(() => {
    // Initialize Vanilla Tilt on the image with data-tilt attribute
    const tiltElements = document.querySelectorAll("[data-tilt]");
    tiltElements.forEach((el) => {
      VanillaTilt.init(el, {
        max: 25, 
        speed: 400, 
        glare: true,
        "max-glare": 1 
      });
    });
    return () => {
      tiltElements.forEach((el) => {
        el.vanillaTilt.destroy();
      });
    };
  }, []);
  return (
    <div>
      <div className=" flex flex-col  lg:flex-row lg:h-screen ">
        <div className="pl-6  w-full lg:w-1/2 mt-12 tracking-widest">
          <h1 className="text-4xl lg:pr-20 lg:pt-36 ">
            Hi There!
            <p className="pt-2 sm:text-5xl lg:text-6xl">I'M Gurshan Aulakh</p>
          </h1>

          <span className="pt-10 inline-block text-4xl lg:text-5xl ">
            {text}
            <Cursor cursorStyle="|"/>
          </span>

          
        </div>
        <div className="mt-10 lg:mt-0 border-blue-500  lg:w-1/2  rounded-xl ">
          <div className="lg:items-center mt-12 flex justify-center">
            <img
              src="/codingImage7.png"
              alt="HomePage Impressive Image showing an animated person studying on a laptop"
              style={{ width: "470px" }}
              data-tilt
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl pt-6 lg:text-6xl text-center">
          LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className=" pl-6 lg:w-1/2">
            <p className="lg:pt-20 xl:pt-28 hidden lg:block tracking-widest">
              From the first moment I typed 'Hello, World!' 👨‍💻 into my console,
              I knew I had found my calling in the enchanting world of
              programming. Who knew a simple greeting could lead to such an
              exhilarating adventure? 🌍✨
            </p>
            <p className="pt-7 hidden lg:block tracking-widest">
              And here you are, browsing through my coded portfolio—crafted with
              love ❤️, passion 💪, and a generous amount of caffeine ☕️! After
              overcoming a myriad of hurdles (and a few keyboard-smashing
              moments ⌨️😅), I've finally become fluent in several programming
              languages, including C, C++, Java, and a delightful mix of
              frontend and backend technologies 🛠️.
            </p>
            {/* <p className="pt-7 hidden lg:block">
              Fun fact: I once spent an hour debugging a piece of code only to
              realize I had forgotten a semicolon 😆. It's moments like these
              that keep my love for coding alive and remind me that even the
              tiniest details can make a world of difference—much like finding a
              typo in the resume! 📄🔍
            </p> */}
            <p className="pt-7 hidden lg:block tracking-widest">
              So, buckle up! 🚀 You’re about to embark on a journey through my
              projects, where creativity meets code 🎨💻 and where every bug 🐛
              is just a feature in disguise.
            </p>

            <p className="pt-6 lg:hidden tracking-widest">
              From typing my first 'Hello, World!' 👨‍💻 to building projects,
              programming has been an exciting journey! 🌟
            </p>
            <p className="pt-4 lg:hidden tracking-widest">
              Welcome to my portfolio—created with passion ❤️, a touch of
              caffeine ☕️, and some memorable coding challenges 🧩.
            </p>
            <p className="pt-4 lg:hidden tracking-widest">
              I've worked with languages like C, C++, Java, and a mix of
              frontend and backend tools 🛠️.
            </p>
            <p className="pt-4 lg:hidden tracking-widest">
              So, dive in! 🚀 Here, creativity meets code, and every bug 🐛 has
              its story.
            </p>
          </div>
          <div className=" lg:w-1/2  border-blue-500 mt-4 xl:mt-0 flex justify-center">
            <img src="/funnyBoyImage.png"
            alt="HomePage animated image of a person looking happy and dancing"
             data-tilt></img>
          </div>
        </div>
      </div>
    </div>
  );
}
