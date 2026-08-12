import '../../index.css'

export const metadata = {
  title: 'CV Website',
  description: 'Joshua Mark - CV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
