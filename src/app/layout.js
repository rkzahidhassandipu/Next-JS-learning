import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins ({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS "
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  description: "Trying to learn NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
