'use client'
import RootLayout from './layout';
import Home from '../layouts/Home';

import Script from 'next/script';

export const DEBUG = true;

export default function App() {
  return (
    <RootLayout titulo="Home">
      <Home />
    </RootLayout>
  );
};