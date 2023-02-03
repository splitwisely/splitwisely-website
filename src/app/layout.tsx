import { Navigation } from "./components/Navigation";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Splitwisely</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
