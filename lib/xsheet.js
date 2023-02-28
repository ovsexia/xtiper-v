import { onlyid, addhtml, loseblur, namefix } from './common.js'
import './css/common.css'
import './css/xsheet.css'

//面板
const xsheet = function(config={}){
  loseblur();

  //面板默认设置
  const options = {
    title: '',
    align: 'center',
    pos: 'bottom',
    times: 0,
    btn: [],
    btn1: null,
    btn2: null,
    btn3: null,
    btn4: null,
    btn5: null,
    btn6: null,
    btn7: null,
    btn8: null,
    force: false,
    forceCall: null,
    btnClose: '',
    html: '',
    end: null,
    zindex: 99999,
  }
  let c = config ? Object.assign(options, config) : options;

  let html = '<div class="xtiper_sheet">';
  c.shade = true;
  c.shadeid = onlyid('xbg');
  html += '<div id="' + c.shadeid + '" class="xtiper_bg"></div>';
  if(c.force){
    c.shadeClose = false;
    if(!c.forceCall || typeof(c.forceCall)!='function'){
      c.forceCall = null;
    }
  }else{
    c.shadeClose = true;
  }

  html += '<div class="xtiper_sheet_in xtiper_sheet_in_' + namefix('pos', c.pos) + '" style="' + (c.width ? 'width: ' + c.width + ';' : '') + '">';
  if(c.title){
    html += '<div class="xtiper_sheet_tit xtiper_sheet_' + namefix('align', c.align) + '">' + c.title + '</div>';
  }
  if(c.html){
    html += '<div class="xtiper_sheet_sc" style="overflow-y: auto; ' + (c.title ? 'height: calc(100% - 50px);' : 'height: 100%;') + '">';
  }
  html += '<ul class="xtiper_sheet_ul xtiper_sheet_' + namefix('align', c.align) + '">';

  let btnel = new Array();
  if(c.btn){
    for(let i=0; i<c.btn.length; i++){
      let oid = onlyid('xli');
      html += '<li id="' + oid + '" class="xtiper_sheet_li"><div class="xtiper_sheet_li_p"><p>' + c.btn[i] + '</p></div></li>';
      btnel.push(oid);
    }
  }
  if(c.html){
    html += c.html;
  }

  if(!c.force && c.btnClose){
    c.closeid = onlyid('xclose');
    html += '<li id="' + c.closeid +'" class="xtiper_sheet_li xtiper_sheet_li_last"><div class="xtiper_sheet_li_p"><div class="xtiper_close"></div><p>' + c.btnClose + '</p></div></li>';
  }
  c.btnel = btnel;
  html += '</ul>';
  if(c.html){
    html += '</div>';
  }
  html += '</div></div>';

  addhtml(html, c);
}

export default xsheet;