import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <header className='p-4'>
          <h1 className='text-center text-2xl'>This is the app header</h1>
          <nav className='flex gap-3'>
            <Link href={'/'}>Home</Link>
            <Link href={'/users'}>Users</Link>
            <Link href={'/error-test'}>Error page</Link>
            <Link href={'/counter/1'}>To start counding from 1</Link>
            <Link href={'/client-component-with-server-component'}>To check out client component with a server component inside it</Link>
            <Link href={'/cool-lazy'}>Supercool lazy load html streaming</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
