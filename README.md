# Xtiper-v

### 使用方法
`import { xmsg, xwin, xalert, xconfirm } from '../xtiper/index.js'`（路径修改）

### 调用
1. 短消息
```
xmsg('短消息', {icon: 'e'});

xmsg('短消息', {
  times: '3',       //自动关闭时间（秒数）
  type: 'white',    //样式。可选：black, white
  pos: 'top',       //位置。可选：middle, top, bottom
  icon: 'e',        //图标。可选：s, e, w, a, h
  end: function(){  //关闭后的回调函数
  	colsole.log('hello');
  },
});
```

----

2. 通知和反馈

```
xalert('这是一个通知', {icon: 'w'});

xalert('这是一个通知', {
  icon: 'w',         //图标。可选：s, e, w, a, h
  times: 0,          //自动关闭时间（秒数）
  title: '通知',     //标题
  shade: true,       //是否开启遮罩
  shadeClose: true,  //是否启用点击遮罩关闭
  end: null,         //关闭后的回调函数
  btn: ['确定'],     //按钮文字
  btn1: null,        //确定按钮回调函数
});
```
```
xconfirm('这是一个反馈', {btn1: function(){
  console.log('点击确定后');
}});

xconfirm('这是一个反馈', {
  icon: 'w',             //图标。可选：s, e, w, a, h
  times: 0,              //自动关闭时间（秒数）
  title: '警告',         //标题
  shade: true,           //是否开启遮罩
  shadeClose: true,      //是否启用点击遮罩关闭
  end: null,             //关闭后的回调函数
  btn: ['确定', '取消'],  //按钮文字
  btn1: null,            //确定按钮回调函数
  btn2: null,            //取消按钮回调函数
});
```

----

3. 弹窗层
```
xwin({
  content: '',                               //内容
  icon: null,                                //图标。可选：s, e, w, a, h
  times: 0,                                  //自动关闭时间（秒数）
  title: '提示',                             //标题
  width: '300px',                            //弹层宽度
  maxWidth: '',                              //宽度最大值
  shade: true,                               //是否开启遮罩
  shadeClose: true,                          //是否启用点击遮罩关闭
  end: null,                                 //关闭后的回调函数
  btn: ['按钮1', '按钮2', '按钮3', '按钮4'],  //按钮文字
  btn1: null,                                //按钮1回调函数
  btn2: null,                                //按钮2回调函数
  btn3: null,                                //按钮3回调函数
  btn4: null,                                //按钮4回调函数
  zindex: 99999,
});
 ```