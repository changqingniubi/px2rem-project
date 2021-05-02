/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-04-29 11:49:16
 * @LastEditTime: 2021-05-02 11:05:49
 * @LastEditors: changqing
 * @Usage: 
 */
var loaderUtils = require('loader-utils');
//var Px2rem = require('px2rem');
var Px2rem = require('./px2rem');
function loader(source) {
  var options = loaderUtils.getOptions(this);
  if(options.exclude && options.exclude.test(this.resource)){
       return source;
  }
  var px2remIns = new Px2rem(options);
  let targetSource = px2remIns.generateRem(source);
  return targetSource;
}
module.exports = loader;
