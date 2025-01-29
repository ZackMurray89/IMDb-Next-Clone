'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DarkModeSwitch from './DarkModeSwitch';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className='w-full border-b-2 border-b-gray-100 dark:border-b-gray-600 shadow-lg bg-transparent'>
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <ul className='flex gap-4'>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href={'/sign-in'}
              className={`transition-colors hover:text-amber-500 ${
                pathname === '/sign-in'
                  ? 'font-bold text-amber-500'
                  : 'text-gray-400'
              }`}
            >
              Sign In
            </Link>
          </SignedOut>
          <li className='hidden sm:block'>
            <Link
              href={'/'}
              className={`transition-colors hover:text-amber-500 ${
                pathname === '/' ? 'font-bold text-amber-500' : 'text-gray-400'
              }`}
            >
              Home
            </Link>
          </li>
          <li className='hidden sm:block'>
            <Link
              href={'/about'}
              className={`transition-colors hover:text-amber-500 ${
                pathname === '/about'
                  ? 'font-bold text-amber-500'
                  : 'text-gray-400'
              }`}
            >
              About
            </Link>
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          <DarkModeSwitch />
          <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
