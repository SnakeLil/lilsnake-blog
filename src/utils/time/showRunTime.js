// 运行时间
export const show_runtime =  () =>{
    let X = new Date("11/23/2023 22:16:00");
    let Y = new Date();
    let T = (Y.getTime() - X.getTime());
    let M = 24 * 60 * 60 * 1000;
    let a = T / M;
    let A = Math.floor(a);
    let b = (a - A) * 24;
    let B = Math.floor(b);
    let c = (b - B) * 60;
    let C = Math.floor((b - B) * 60);
    let D = Math.floor((c - C) * 60);
    return ("网站已运行: " + A + "天" + B + "小时" + C + "分" + D + "秒")  
  }