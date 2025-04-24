import './_styles/globals.scss'

export const metadata = {
  title: '我的網站',
  description: '網站說明',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
