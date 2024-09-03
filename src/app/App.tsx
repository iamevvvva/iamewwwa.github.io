import { Popover } from '@/shared/ui/Popover';
import { Text } from '@/shared/ui/Text';
import { Navbar } from '@/widgets/Navbar';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const handleActiveBurger = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <div className={'app'}>
      <Navbar activeBurger={activeBurger} handleActiveBurger={handleActiveBurger} />

      <Popover activeBurger={activeBurger} setActiveBurger={handleActiveBurger} />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;
