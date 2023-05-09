import './globals.css'


export const metadata = {
  title: 'Spotify',
  description: 'listen to music'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body className="bg-zinc-900 text-zinc-50">{children}</body> 
     <link rel="shortcut icon" href="./img/icon.png" type="image/x-icon" />
    </html>

  )
}


