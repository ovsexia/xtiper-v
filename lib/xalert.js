import xwin from './xwin.js'

//通知默认设置
let options = {
  type: 'alert',
  icon: null,
  times: 0,
  title: '提示',
  shade: true,
  shadeClose: true,
  end: null,
  btn: ['确定'],
  btn1: null,
  btn2: null,
  btn3: null,
  btn4: null,
  btnbg: null,
  zindex: 99999,
}

//通知
const xalert = function(content, config={}){
  let c = Object.assign(options, config);
  c.content = content;
  xwin(c);
}

export default xalert;