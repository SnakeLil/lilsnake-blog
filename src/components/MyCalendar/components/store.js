import { createContext } from 'react';
import { initDay } from '../utils/handler.js';

export const GlobalContext = createContext({
  fold: false,
  showLunar: true,
  selectDate: initDay(new Date(), 'cur'),
  curTab: 1,
  startWeek: 0,
  viewChange: (v) => {},
  onSelect: (e) => {},
});
