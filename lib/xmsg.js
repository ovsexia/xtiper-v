import { addhtml, loseblur, namefix } from './common.js'
import icons from './icons.js'
import './xmsg.css'

//短消息默认设置
let options = {
  times: 2,
  type: 'black',  //black or white
  pos: 'middle',  //middle or top or bottom
  icon: null,
  end: null,
  zindex: 99999,
}

//短消息
const xmsg = function(content, config={}){
  loseblur();
  let c = Object.assign(options, config);

  let html = '';
  html += '<div class="xtiper_msg xtiper_msg_' + namefix('pos', c.pos) + ' xtiper_msg_' + c.type + '"><div class="xtiper_msg_in"><p>';
  if(c.icon){
    html += '<span class="xtiper_vmid xtiper_svg">';
    c.icon = namefix('icon', c.icon);
    if(c.icon=='success'){
       html += icons.success;
    }else if(c.icon=='error'){
      html += icons.error;
    }else if(c.icon=='warning'){
      html += icons.warning;
    }else if(c.icon=='ask'){
      html += icons.ask;
    }else if(c.icon=='hello'){
      html += icons.hello;
    }
    html += '</span>'
  }
  html += content + '</p></div></div>';

  addhtml(html, c);
}

export default xmsg;