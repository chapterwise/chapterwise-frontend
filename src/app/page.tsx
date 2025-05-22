import Image from "next/image";
import Header from "./components/header";
import MissionPage from "./pages/about";
import HelpCenter from "./pages/faqsupport";
import BookCard from "./components/BookCard";

export default function Home() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white">
        <Header />
      </header> 
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 ">
        <div className="w-full min-h-full px-4">
          <HelpCenter/>
        </div>
      </main>
    </>
  );
}