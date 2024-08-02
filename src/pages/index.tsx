import Image from "next/image";
import { Inter } from "next/font/google";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar"
import Header from "@/components/header/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-row h-[100vh] ${inter.className} `}
    >
      <div className="w-[18%]">
        <LeftSidebar />
      </div>
      <div className=" w-full relative flex flex-[5.5] h-[100vh] overflow-y-auto pb-[20px]">
        <Header />
      </div>
       <div className="w-[18%]">
        <RightSidebar />
      </div>
    </main>
  );
}
