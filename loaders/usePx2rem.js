/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-04-29 13:52:51
 * @LastEditTime: 2021-05-02 11:35:56
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

/**
[
  {
    "type": "rule",
    "selectors": ["#root"],
    "declarations": [
      {
        "type": "declaration",
        "property": "width",
        "value": "750px"
      },
      {
        "type": "declaration",
        "property": "height",
        "value": "750px"
      }
    ]
  }
]
*/
