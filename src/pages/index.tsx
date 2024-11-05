import { useState, useEffect } from "react";
import Image from "next/image";
import Login from "./auth/Login";
import { Inter } from "next/font/google";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import Header from "@/components/header/Header";
import Main from "@/components/home/main";
import { setClientToken } from "@/spotify";
import { Children } from "react";
import Player from "@/components/Player/Player";
import BackgroundImage from "../../public/images/backgrounds/Background.jpg";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log("Token: ", token); 
    const hash = window.location.hash;
    window.location.hash = "";
    
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else if (token) {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  
  return !token ? (
    <div>
      <Login />
    </div>
  ) : (
    <main className={`w-full flex flex-row h-[100vh] ${inter.className} `}  
      style={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <div className="w-[18%]">
        <LeftSidebar />
      </div>
      <div className="w-[64%] flex flex-col">
        <Header />
        <Main />
      </div>
      <div className="fixed bottom-0 w-full bg-zinc-800 z-[100]">
        <Player />
      </div>
      <div className="w-[18%]">
        <RightSidebar />
      </div>
    </main>
  );
}
