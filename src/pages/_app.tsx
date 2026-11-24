import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Jost, Pinyon_Script, Lavishly_Yours, Dynalight } from "next/font/google";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

const dynalight = Dynalight({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dynalight",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${cormorant.variable} ${jost.variable} ${pinyon.variable} ${dynalight.variable} min-h-screen bg-ivory font-sans font-light text-body`}>
      <Component {...pageProps} />
    </div>
  );
}
