import Image from "next/image";
import Header from "./components/header";
import MissionPage from "./pages/about";

export default function Home() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50">
      <Header />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center p-0 pt-24 w-full">
        <div className="w-full h-full px-4">
          <MissionPage />
        </div>
      </main>
    </>

  );
}
