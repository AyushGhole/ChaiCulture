import Header from "./components/Header";
import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <Hero />
      <EmailSignup />
      <Footer />
    </main>
  );
};

export default Home;
