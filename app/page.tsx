import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-between">
      <Navbar />
      <Footer />
    </main>
  );
}
