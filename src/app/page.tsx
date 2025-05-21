import Image from "next/image";
import Header from "./components/header";
import MissionPage from "./pages/about";
import HelpCenter from "./pages/faqsupport";
import BookCard from "./components/BookCard";

export default function Home() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50">
      <Header />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center p-0 pt-24 w-full">
        <div className="bg-black min-h-screen p-4 flex items-center justify-center">
      <BookCard
        title="SITA - WARRIOR OF MITHILA"
        author="AMISH"
        imageUrl="/api/placeholder/400/500"
        price={50}
        originalPrice={199}
        series="RAM CHANDRA SERIES"
        bookNumber={2}
        categories={["ENGLISH", "SPIRITUAL"]}
        quote={{
          text: "[Amish] is India's Tolkien and Asia's Paulo Coelho.",
          source: "BBC"
        }}
      />
    </div>
      </main>
    </>

  );
}
