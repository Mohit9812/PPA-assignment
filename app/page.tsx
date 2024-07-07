"use client"
import EighthFold from "@/components/EighthFold";
import FifthFold from "@/components/FifthFold";
import FirstFold from "@/components/FirstFold";
import Footer from "@/components/Footer";
import FourthFold from "@/components/FourthFold";
import Header from "@/components/Header";
import NinthFold from "@/components/NinthFold";
import SecondFold from "@/components/SecondFold";
import SeventhFold from "@/components/SeventhFold";
import SixthFold from "@/components/SixthFold";
import ThirdFold from "@/components/ThirdFold";
import { createContext, useState } from "react";

const defaultValue = {
  darkMode: false,
  setDarkMode: () => {}
}

export const MyContext = createContext({});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <MyContext.Provider value={{darkMode, setDarkMode}}>
      <Header />
      <div className={`flex flex-col gap-12 ${darkMode ? 'bg-black' :''}`}>
        <FirstFold />
        <SecondFold />
        <ThirdFold />
        <FourthFold />
        <FifthFold />
        <SixthFold />
        <SeventhFold />
        <EighthFold />
        <NinthFold />
      </div>
      <Footer />
    </MyContext.Provider>
  );
}
