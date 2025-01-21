import Header from "@/components/Header";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Experience from "@/components/Experience";
import RecentWork from "@/components/RecentWork";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header (no grainy effect) */}
      <Header />

      {/* Main content with grainy effect */}
      <main className="bg-brushed-grain">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-12">
          <Profile />
          <About />
          <Experience />
          <RecentWork />
        </div>
      </main>
    </div>
  );
}