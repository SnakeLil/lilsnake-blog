import { useContext, useMemo } from 'react';
import { GlobalContext } from '../../store';
import { resortWeeks } from '../../../utils/handler';

import '../../../styles/layout.scss';
import './index.scss';

export default function Week() {
  const { startWeek } = useContext(GlobalContext);

  const weeks = useMemo(() => resortWeeks(startWeek), [startWeek]);

  return (
    <div className={`calendar__weeks grid`}>
      {weeks.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
