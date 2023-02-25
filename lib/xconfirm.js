import xwin from './xwin.js'

//通知默认设置
let options = {
  type: 'confirm',
  icon: 'warning',
  times: 0,
  title: '警告',
  shade: true,
  shadeClose: true,
  end: null,
  btn: ['确定', '取消'],
  btn1: null,
  btn2: null,
  btn3: null,
  btn4: null,
  btnbg: null,
  zindex: 99999,
}

//反馈
const xconfirm = function(content, config={}){
  let c = Object.assign(options, config);
  c.content = content;
  xwin(c);
}

export default xconfirm;