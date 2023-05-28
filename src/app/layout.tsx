import Directorybar from "../components/directory/directorybar";
import Sidebar from "../components/navigation/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nowted",
  description: "A note taking next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-black items-stretch text-white">
          <div className="w-[300px] px-6 py-6 overflow-auto">
            <Sidebar />
          </div>
          <div className="p-6  bg-white/5">
            <Directorybar />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
