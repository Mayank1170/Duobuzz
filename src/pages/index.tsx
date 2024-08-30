import Image from "next/image";
import { Inter } from "next/font/google";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import Header from "@/components/header/Header";
import Main from "@/components/home/main";
import { Children } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className={`flex flex-row h-[100vh] ${inter.className} `}>
      <div className="w-[18%]">
        <LeftSidebar />
      </div>
      <div className="w-[64%] flex flex-col">
        <Header />
        <Main />
      </div>
      <div className="w-[18%]">
        <RightSidebar />
      </div>
    </main>
  );
}
