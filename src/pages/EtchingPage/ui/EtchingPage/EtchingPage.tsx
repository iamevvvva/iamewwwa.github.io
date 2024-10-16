import { useEffect, useRef } from 'react';
import { dataEtching } from '../../model/consts/consts';
import cls from './EtchingPage.module.scss';
import { EtchingBlock } from '@/widgets/EtchingBlock/ui/EtchingBlock';
import classNames from 'classnames';

const data = dataEtching;

const EtchingPage = () => {
  const etchingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (etchingRef.current) etchingRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={cls.etchingPage} ref={etchingRef}>
      <h1 className={cls.etchingTitle}>Etching</h1>

      {data.map((el, idx) => (
        <EtchingBlock className={classNames('', { [cls.EtchingBlockFirst]: idx === 0 }, [])} name={el.name} year={el.year} desc={el.desc} img={el.img} key={idx} />
      ))}
    </div>
  );
};

export default EtchingPage;
