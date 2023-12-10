import { getAstro } from './astro';
import { solar2lunar } from './lunar';

// 农历
export function lunarHandle(date) {
  const { year, month, day } = date;

  date['lunar'] = solar2lunar(year, month, day);

  return date;
}

// 星座
export function astroHandle(date) {
  const { month, day } = date;

  date['astro'] = getAstro(month, day);

  return date;
}

// 日期标记
export function markerHandle(date, cache) {
  // 从缓存中获取 marker
  const { year, month, day } = date;

  const key = `${year}_${month}_${day}`;
  const marker = Object.prototype.hasOwnProperty.call(cache,key) ? { ...cache[key] } : undefined;

  date['markers'] = marker;

  return date;
}