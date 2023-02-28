import { addhtml, loseblur, namefix } from './common.js'
import './css/xload.css'

//加载
const xload = function(config={}){
  loseblur();

  //加载默认设置
  const options = {
    title: '',
    times: 0,
    end: null,
    zindex: 99999,
  }
  let c = config ? Object.assign(options, config) : options;

  let html = '';
  html += '<div class="xload"><div class="xload_in">';
  console.log(c.title);
  if(c.title){
    html += '<div class="xload_p">' + c.title + '</div>';
  }
  html += '</div></div>';

  addhtml(html, c);
}

export default xload;