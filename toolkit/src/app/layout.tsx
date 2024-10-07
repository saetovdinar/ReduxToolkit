import {Providers} from "../redux/provider/provider";
import "./globals.css";



export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (

      <html lang="en">
        <body >
          <Providers>
            {children}
          </Providers>
          
        </body>
      </html>
  );
}
