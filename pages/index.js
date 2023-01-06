import Head from "next/head";
import 'animate.css';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCode
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import profile from "../public/img/profile.png";
import android from "../public/img/android.png";
import website from "../public/img/website.png";
import blockchain from "../public/img/block.png";
import Image from "next/image";
import react from "../public/img/react.png";
import js from "../public/img/javascript-logo.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Paresh&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <a href="mailto:pareshchawla.56@gmail.com" 
          target="_blank" rel="noreferrer"><h1 className="hvr-underline-from-center font-burtons text-xl">Contact Me</h1></a>
            <ul className="flex items-center">
              <li>
                <div className="cursor-pointer text-2xl" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <BsFillSunFill />: <BsFillMoonStarsFill />  }
                </div>
              </li>
              <li>
                <a
                  className="hvr-grow-shadow bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://bit.ly/3WFH8HO" target="_blank" rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="animate__animated animate__bounce text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Paresh Chawla
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Programmer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Web Developer (MERN) and Mobile App Developer (Android) currently pursuing BE in Computer Science.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a className="hvr-float-shadow" href="https://github.com/PareshChawla" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <a className="hvr-float-shadow" href="https://www.linkedin.com/in/paresh-chawla-5035831b2/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a className="hvr-float-shadow" href="https://www.hackerrank.com/pareshchawla" target="_blank" rel="noreferrer"><AiFillCode /></a>
            </div>
            <div className="hello hvr-glow mx-auto my-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image className="profileImage" src={profile} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="hvr-underline-from-center text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a developer,
            I have had the opportunity to create numerous projects
            in both web development and mobile app development.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including web design,
              develop websites, design android layouts and programming.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 hvr-outline-in hvr-push">
              <a href="https://github.com/PareshChawla" target="_blank" rel="noreferrer"><Image src={website} width={100} height={100} alt=""/></a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Web Development
              </h3>
              <p className="py-2">
              Developing custom web-based applications and software.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Node</p>
              <p className="text-gray-800 py-1">MongoDB</p>
            </div>
            <div className="hvr-outline-in hvr-push text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <a href="https://github.com/PareshChawla" target="_blank" rel="noreferrer"><Image src={android} width={100} height={100} alt="" /> </a>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Android Development
              </h3>
              <p className="py-2">
              Designing and building new Android apps from scratch.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1">Android</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Kotlin</p>
              <p className="text-gray-800 py-1">Firebase</p>
            </div>
            <div className="hvr-outline-in hvr-push text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <a href="https://github.com/PareshChawla" target="_blank" rel="noreferrer"><Image src={blockchain} width={100} height={100} alt=""/></a>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Blockchain Development</h3>
              <p className="py-2">
              Designing and implementing smart contracts
              and Building DApps.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1">Solidity</p>
              <p className="text-gray-800 py-1">Ethereum & ICP</p>
              <p className="text-gray-800 py-1">Truffle</p>
              <p className="text-gray-800 py-1">MetaMask</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="hvr-underline-from-center text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             I have developed various projects on web development
             and android development,
             and I am currently working on and implementing 
             blockchain development projects.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            The following are a few projects which I have developed:
            </p>
          </div>
          <div className="lg:flex md:flex gap-10">
            <div className="transform transition duration-500 hover:scale-110 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <a href="https://github.com/PareshChawla/Note-Keeper-React-App" target="_blank" rel="noreferrer"><Image src={react} width={100} height={100} alt=""/></a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Note Keeper React App
              </h3>
            </div> 
            
            <div className="transform transition duration-500 hover:scale-110 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://github.com/PareshChawla/ProjecGroup" target="_blank" rel="noreferrer"><Image src={android} width={100} height={100} alt=""/></a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                ProjecGroup Android App
              </h3>
              
            </div>
            <div className="transform transition duration-500 hover:scale-110 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://github.com/PareshChawla/React-ToDoListApp" target="_blank" rel="noreferrer"><Image src={react} width={100} height={100} alt="" /></a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                To Do List React App
              </h3>
             
            </div>
          </div>
            <div className="lg:flex md:flex gap-10">
             <div className="transform transition duration-500 hover:scale-110 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://github.com/PareshChawla/Blog-website" target="_blank" rel="noreferrer"><Image src={js} width={100} height={100} alt="" /></a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Blog Website
              </h3>
              
            </div>
            <div className="transform transition duration-500 hover:scale-110 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://github.com/PareshChawla/Water-Delivery-System-" target="_blank" rel="noreferrer"><Image src={android} width={100} height={100} alt="" /></a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Water Delivery Android App
              </h3>
              
            </div>
            <div className="transform transition duration-500 hover:scale-110 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://github.com/PareshChawla/emojiPedia" target="_blank" rel="noreferrer"><Image src={website} width={100} height={100} alt="" /></a>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                EmojiPedia React App
              </h3>
              
            </div>
            </div>
            </section>

          <div className="py-10 copyright">&copy; Copyright 2023 Paresh Chawla</div>
        
      </main>
    </div>
  );
}
