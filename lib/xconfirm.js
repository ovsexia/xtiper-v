import xwin from './xwin.js'

//反馈
const xconfirm = function(content, config={}){
  //反馈默认设置
  const options = {
    type: 'confirm',
    title: '警告',
    icon: 'warning',
    times: 0,
    shade: true,
    shadeClose: true,
    end: null,
    btn: ['确定', '取消'],
    btn1: function(){},
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

export default xconfirm;