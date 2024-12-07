import "@/app/globals.css";
import localFont from "next/font/local";
import { Abril_Fatface } from 'next/font/google';
const abrilFatface = Abril_Fatface({
    weight: "400",
    variable: '--font-abrilfatface',
    subsets: ['latin'],
});

const balestya = localFont({
        src: [{
            path: "../../public/fonts/Balestya_Normal.ttf",
            weight: "400",
        },
        ],
        variable: '--font-balestya'
});
const gilroy = localFont({
    src: [{
        path: "../../public/fonts/Gilroy-SemiBold.ttf",
        weight: "400",
    },
    ],
    variable: '--font-gilroy'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${balestya.variable} ${gilroy.variable} ${abrilFatface.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
