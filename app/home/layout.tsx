'use client';

import { useGlobalContext } from '../context/store';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const {username, isLogin} = useGlobalContext();


  return (
    <div>
      HOME LAYOUT
      <h1> Hello: {username}</h1>
      {children}
    </div>
  );
}
