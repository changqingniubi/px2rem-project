/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-04-29 13:52:51
 * @LastEditTime: 2021-05-02 16:23:45
 * @LastEditors: changqing
 * @Usage: 
 */
let Px2rem = require('./px2rem');
let px2rem = new Px2rem({
    remUnit: 75,
    remPrecision: 8
});
let cssText = `
#root{
    width:750px;
    height:750px;
    font-size:12px;/*px*/
    border: 1px solid #ddd; /*no*/
}
`;
let newCSS = px2rem.generateRem(cssText);
console.log(newCSS);

// #root {
//   width: 10rem;
//   height: 10rem;
//   border: 1px solid #ddd;
// }

// [data-dpr="1"] #root {
//   font-size: 6px;
// }

// [data-dpr="2"] #root {
//   font-size: 12px;
// }

// [data-dpr="3"] #root {
//   font-size: 18px;
// }