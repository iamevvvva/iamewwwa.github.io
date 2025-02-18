import { useResize } from '@/shared/hooks/useResize/useResize';
import { Popover } from '@/shared/ui/Popover';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/LanguageSwitcher';
import { Navbar } from '@/widgets/Navbar';
import { Suspense, useState } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';

import '@/shared/i18n/i18n';

const App = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const { width } = useResize();

  const handleActiveBurger = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <section className={'app'}>
      <Navbar activeBurger={activeBurger} handleActiveBurger={handleActiveBurger} />

      <>{createPortal(<LanguageSwitcher isNone={Boolean(width < 1024)} />, document.body)}</>

      <Popover activeBurger={activeBurger} setActiveBurger={handleActiveBurger} />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default App;
