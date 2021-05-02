/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-04-28 17:51:34
 * @LastEditTime: 2021-05-02 15:20:22
 * @LastEditors: changqing
 * @Usage: 
 */
import './base.css'
//import 'amfe-flexible/index.js';
import 'lib-flexible/flexible.js'
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Button} from 'antd';
ReactDOM.render(<div>
    我是<Button type="primary">按钮</Button>
</div>, document.getElementById('root'));