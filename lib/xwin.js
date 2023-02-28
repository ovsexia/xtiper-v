import { onlyid, addhtml, loseblur, namefix } from './common.js'
import icons from './icons.js'
import './css/common.css'
import './css/xwin.css'

//弹窗层
const xwin = function(config={}){
  loseblur();

  //弹窗层默认设置
  const options = {
    type: 'confirm',
    title: '提示',
    content: '',
    icon: '',
    times: 0,
    width: '300px',
    maxWidth: '',
    shade: true,
    shadeClose: true,
    btn: ['确定', '取消'],
    btn1: null,
    btn2: null,
    btn3: null,
    btn4: null,
    btnbg: null,
    end: null,
    zindex: 99999,
  }
  let c = config ? Object.assign(options, config) : options;

  let html = '<div class="xtiper_win' + (c.shade===true ? ' xtiper_win_shade' : '') + '">';
  if(c.shade===true){
    c.shadeid = onlyid('xbg');
    html += '<div id="' + c.shadeid + '" class="xtiper_bg"></div>';
  }
  html += '<div class="xtiper_win_in" style="width: ' + c.width + '" data-xwidth="' + c.width + '"><div class="xtiper_win_ani">';

  //标题
  c.closeid = onlyid('xclose');
  html += '<div class="xtiper_tit"><p>' + c.title + '</p><div class="xtiper_minmax"><div id="' + c.closeid +'" class="xtiper_close"></div></div></div>';

  //内容
  html += '<div class="xtiper_pad"><div class="xtiper_pr"><div class="xtiper_tip">';
  c.icon = namefix('icon', c.icon);
  if(c.icon && icons[c.icon]){
    html += '<span class="xtiper_win_icon">' + icons[c.icon] + '</span>';
  }
  html += '<div class="xtiper_con' + (c.icon ? ' xtiper_con_icon' : '') + '"><div class="xtiper_conin">' + c.content + '</div></div></div></div></div>';

  //按钮
  let btnclass = new Array();
  btnclass[0] = c.btn1!=null ? ' class="xactive"' : '';
  btnclass[1] = c.btn2!=null ? ' class="xactive"' : '';
  btnclass[2] = c.btn3!=null ? ' class="xactive"' : '';
  btnclass[3] = c.btn4!=null ? ' class="xactive"' : '';
  if(c.btnbg && c.btnbg.length){  //自定义按钮颜色
    for(let i=0; i<c.btnbg.length; i++){
      btnclass[i] = c.btnbg[i]===true ? ' class="xactive"' : '';
    }
  }
  html += '<div class="xtiper_btn' + (c.icon ? ' xtiper_btn_' + c.icon : '') + ' xtiper_btn' + c.btn.length + '"><ul>';
  let btnel = new Array();
  for(let i=0; i<4; i++){
    if(c.btn[i]){
      let oid = onlyid('xli');
      html += '<li id="' + oid + '" ' + btnclass[i] + '><button' + (btnclass[i] && c.iconColor && c.type=='confirm' ? ' style="background-color:' + c.iconColor + '"' : '') + '>' + c.btn[i] + '</button></li>';
      btnel.push(oid);
    }
  }
  c.btnel = btnel;
  html += '</ul><div class="xtiper_btnbor"></div></div>';

  //结束
  html += '</div></div></div>';

  addhtml(html, c);
}

export default xwin;