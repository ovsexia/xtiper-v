//生成唯一id
const onlyid = function(prefix){
  let rand = Math.random().toString().split('.')[1] + '_' + new Date().getTime().toString().slice(-3);
  return prefix + '_' + rand;
}

/* html    html代码
 * config  参数
 * css     需要添加的css类名
 */
const addhtml = function(html, config){
  let body = document.body;
  let div = document.createElement('div');
  div.setAttribute('class', 'xtiper');
  div.style.position = 'relative';

  div.style.zIndex = config.zindex;
  div.innerHTML = html;
  body.appendChild(div);

  setTimeout(function(){
    div.classList.add('xon');
  }, 10);

  //自动关闭
  if(config.times){
    setTimeout(function(){
      div.classList.remove('xon');
      if(config.end && typeof(config.end)){
        config.end();
      }
    }, (config.times * 1000) + 10);

    setTimeout(function(){
      div.remove();
    }, (config.times * 1000) + 300);
  }

  //绑定按钮
  if(config.btnel && config.btn){
    let btnfun = new Array();
    btnfun[0] = config.btn1 ? config.btn1 : null; btnfun[1] = config.btn2 ? config.btn2 : null;
    btnfun[2] = config.btn3 ? config.btn3 : null; btnfun[3] = config.btn4 ? config.btn4 : null;
    btnfun[4] = config.btn5 ? config.btn5 : null; btnfun[5] = config.btn6 ? config.btn6 : null;
    btnfun[6] = config.btn7 ? config.btn7 : null; btnfun[7] = config.btn8 ? config.btn8 : null;

    for(let i=0; i<config.btnel.length; i++){
      bclick(config.btnel[i], btnfun[i], div, config.times, config.end);
    }
  }

  //背景关闭
  if(config.shadeid && config.shadeClose===true){
    bclick(config.shadeid, function(){}, div, config.times, config.end);
  }

  //关闭按钮
  if(config.closeid){
    bclick(config.closeid, function(){}, div, config.times, config.end);
  }

  //强制选择
  if(config.shadeid && config.forceCall){
    let ele = document.getElementById(config.shadeid);
    if(config.forceCall && typeof(config.forceCall)=='function'){
      ele.addEventListener('click', function(){
        config.forceCall();
      });
    }
  }
}

//绑定按钮事件
const bclick = function(btn, fun, div, times, end){
  if(btn){
    let ele = document.getElementById(btn);
    if(fun && typeof(fun)=='function'){
      ele.addEventListener('click', function(){
        fun();
        close(div, times);
        if(end && typeof(end)){
          end();
        }
      });
    }else{
      ele.addEventListener('click', function(){
        close(div, times);
        if(end && typeof(end)){
          end();
        }
      });
    }
  }
}

//关闭层
const close = function(div, times){
  div.classList.remove('xon');

  setTimeout(function(){
    div.remove();
  }, (times * 1000) + 300);
}

//让所有按钮失去焦点
const loseblur = function(){
  let button = document.getElementsByTagName('button');
  if(button.length>0){
    for(let i=0; i<button.length; i++){
      button[i].blur();
    }
  }
  let input = document.getElementsByTagName('input');
  if(input.length>0){
    for(let i=0; i<input.length; i++){
      let input_type = input[i].getAttribute('type');
      if(input_type && (input_type=='button' || input_type=='submit')){
        input[i].blur();
      }
    }
  }
}

//参数名称补全
const namefix = function(type, name){
  let newname = name;
  if(type=='pos'){
    if(name=='t'){
      newname = 'top';
    }else if(name=='b'){
      newname = 'bottom';
    }else if(name=='m'){
      newname = 'middle';
    }else if(name=='l'){
      newname = 'left';
    }else if(name=='r'){
      newname = 'right';
    }
  }else if(type=='icon'){
    if(name=='s'){
      newname = 'success';
    }else if(name=='e'){
      newname = 'error';
    }else if(name=='w'){
      newname = 'warning';
    }else if(name=='a'){
      newname = 'ask';
    }else if(name=='h'){
      newname = 'hello';
    }
  }else if(type=='type'){
    if(name=='w'){
      newname = 'white';
    }else if(name=='b'){
      newname = 'black';
    }
  }else if(type=='align'){
    if(name=='l'){
      newname = 'left';
    }else if(name=='r'){
      newname = 'right';
    }
  }
  return newname;
}

export {
  onlyid,
  addhtml,
  loseblur,
  namefix,
};