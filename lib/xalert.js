import xwin from './xwin.js'

//通知
const xalert = function(content, config={}){
  //通知默认设置
  const options = {
    type: 'alert',
    title: '提示',
    icon: 'warning',
    times: 0,
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
  let c = config ? Object.assign(options, config) : options;
  c.content = content;
  xwin(c);
}

export default xalert;