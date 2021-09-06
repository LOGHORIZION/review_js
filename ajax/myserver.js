const { response } = require('express');
const express = require('express');
const app=  express();
// post 改成all 接受任意类型请求 get post delay option...
app.all('/server',(request,response)=>{
  //设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');

  //设置响应头 * 表示所有类型头信息都可以接受
  response.setHeader('Access-Control-Allow-Headers', '*');
  //设置相应体
  response.send('ajax post');
})

app.all('/json-server',(request,response)=>{
  //设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');

  //设置响应头 * 表示所有类型头信息都可以接受
  response.setHeader('Access-Control-Allow-Headers', '*');
  const data ={'name':'atguigu'}

  //设置相应体
  // response.send('ajax json');
  response.send(JSON.stringify(data));
})

app.listen(8000,()=>{
  console.log('服务已经启动, 8000 端口监听中....');
})