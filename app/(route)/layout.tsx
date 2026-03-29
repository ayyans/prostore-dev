import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, SERVER_URL } from "@/lib/constants";
import { APP_DESCRIPTION } from "@/lib/constants";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
        <main className="flex-1 wrapper">
            {children}
        </main>
        <Footer />
    </div>
  );
}
