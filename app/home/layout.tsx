'use client';

import { useGlobalContext } from '../context/store';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      HOME LAYOUT
      <h1></h1>
      {children}
    </div>
  );
}
