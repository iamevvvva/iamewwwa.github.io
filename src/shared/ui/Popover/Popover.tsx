import classNames from 'classnames';
import cls from './Popover.module.scss';
import { HStack } from '../Stack/HStack/HStack';
import { Link } from 'react-router-dom';
import { textNavbar } from '@/widgets/Navbar/ui/Navbar';
import { VStack } from '../Stack/VStack/VStack';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher/LanguageSwitcher';

import styles from './Popover.module.scss';

interface PopoverProps {
  activeBurger: boolean;
  setActiveBurger: () => void;
}

export const Popover = ({ activeBurger, setActiveBurger }: PopoverProps) => {
  return (
    <div className={classNames(cls.Popover, { [cls.activePopover]: activeBurger }, [])}>
      <div className={cls.cross} onClick={setActiveBurger}>
        &times;
      </div>
      <VStack>
        {textNavbar.map(({ title, href }) => (
          <Link to={href} key={title} className={cls.textPopover} onClick={setActiveBurger}>
            {title}
          </Link>
        ))}
      </VStack>

      <LanguageSwitcher className={styles.btnSwitch} isPhone setActiveBurger={setActiveBurger} />
    </div>
  );
};
