window.onload = ()=>{
  let index  = 0;
  let i = 1;
  let imgsrc = []
  for(i;i<=5;i++){
    str = './img/'+ i + '.jpg';
    imgsrc.push(str);
  }
  console.log(imgsrc);
  // let ps = document.getElementsByClassName('title');
  // title = ps[0];
  // console.log(title);
  // title.innerHtml = '123';
  // title.text = '123';
  let ttl = document.getElementById('t');
  ttl.innerText = '123';

  let img = document.getElementsByTagName('img');
  let target= img[0];
  let btn0 = document.getElementById('btn0');
  btn0.onclick = ()=>{
    index--;
    index <0? index = 4:null;
    // index = (index+1)%5;
    target.src =imgsrc[index];
    ttl.innerText = 'this is ' + (index +1)+' image';
  }
  let btn1 = document.getElementById('btn1');
  btn1.onclick = ()=>{
    index = (index+1)%5;
    target.src =imgsrc[index];
    ttl.innerText = 'this is ' + (index +1)+' image';
  }

}