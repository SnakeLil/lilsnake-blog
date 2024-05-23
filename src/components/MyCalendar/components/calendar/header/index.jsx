import { useContext, useMemo, useState } from 'react';
import { GlobalContext } from '../../store';
import Checkbox from '../../checkbox';
import Picker from '../../picker';

import './index.scss';
import '../../../styles/layout.scss';

export default function Header() {
  const { showLunar, selectDate, fold, viewChange } = useContext(GlobalContext);

  // 农历年
  const lunar = useMemo(() => {
    if (showLunar) {
      return (
        <div className='year_desc'>
          {`${selectDate.lunar.gzYear}${selectDate.lunar.zodiac}年`}
        </div>
      );
    }

    return null;
  }, [showLunar, selectDate]);

  const [displayPicker, setDisplayPicker] = useState(false);

  return (
    <div className="row justify-between items-center">
      <div
        className={`calendar__content row `}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setDisplayPicker(!displayPicker);
        }}>
        <div
          className='datetime'>{`${selectDate.month}月${selectDate.day}日`}</div>
        <div className="column justify-center">
          <div>{`${selectDate.year}年`}</div>
          {lunar}
        </div>
      </div>
      <Picker
        display={displayPicker}
        onClose={() => {
          setDisplayPicker(false);
        }}></Picker>
      <Checkbox checked={fold} onChange={viewChange}></Checkbox>
    </div>
  );
}
