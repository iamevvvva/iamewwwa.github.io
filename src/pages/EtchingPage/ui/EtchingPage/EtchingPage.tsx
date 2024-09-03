import { dataEtching } from '../../model/consts/consts';
import cls from './EtchingPage.module.scss';
import { EtchingBlock } from '@/widgets/EtchingBlock/ui/EtchingBlock';

const data = dataEtching;

const EtchingPage = () => {
  return (
    <div className={cls.etchingPage}>
      <h1 className={cls.etchingTitle}>Etching</h1>

      {data.map((el, idx) => (
        <EtchingBlock name={el.name} year={el.year} desc={el.desc} img={el.img} key={idx} />
      ))}
    </div>
  );
};

export default EtchingPage;
