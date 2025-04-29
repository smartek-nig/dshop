import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-[40vh] bg-slate-800/55 text-white flex flex-col px-16 py-8">

      <h2 className="text-lg">All rights reserved &copy; <Link href='https://www.linkedin.com/in/damilola-ishola-74984830b/' target="_blank">smartek</Link> {new Date().getFullYear()}</h2>

    </footer>
  )
}