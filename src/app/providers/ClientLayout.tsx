'use client';

import { useResize } from '@/shared/hooks/useResize/useResize';
import { Popover } from '@/shared/ui/Popover/Popover';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/LanguageSwitcher';
import { Navbar } from '@/widgets/Navbar';
import { createPortal } from 'react-dom';
import { Suspense, useState } from 'react';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [activeBurger, setActiveBurger] = useState(false);
  const { width } = useResize();

  const handleActiveBurger = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <section className="app">
      <Navbar activeBurger={activeBurger} handleActiveBurger={handleActiveBurger} />
      {typeof document !== 'undefined' &&
        typeof document.body !== 'undefined' &&
        createPortal(
          <LanguageSwitcher isNone={Boolean(width < 1024)} />,
          document.body
        )}
      <Popover activeBurger={activeBurger} setActiveBurger={handleActiveBurger} />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </section>
  );
}
