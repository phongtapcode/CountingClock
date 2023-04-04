var second=0;
var mlsecond=0;
var minute=0;
var hours=0;
let cnt;
var dem1 = document.querySelector('.mlsecond');
var dem2 = document.querySelector('.second');
var dem3 = document.querySelector('.minute');
var dem4 = document.querySelector('.hours');
var begin = document.querySelector('.start');
var end  = document.querySelector('.pause');
var reset = document.querySelector('.reset');
var record = document.querySelector('.record');
var abc = document.querySelectorAll('.abc');


let checkStart =0;
let cnt2=-1;
 record.onclick =function(){
     if(second !== 0 ||  mlsecond!==0 || minute!==0){
             cnt2++;
       abc[cnt2].textContent = `Record ${cnt2+1}: ${hours}:${minute}:${second}:${mlsecond-1}`;
     }
 }
let ok=0;
begin.onclick = function(){
  ok++;
  if(ok==1){start();}
  checkStart =1;
  if(checkStart === 1){
    begin.textContent = 'Continue';
  }
}
end.onclick = function(){
  ok=0;
  pause();
}
reset.onclick = function(){
  RS();
  for(let i=0; i<3; i++){
    abc[i].textContent='';
  }
  cnt2=-1;
}

function RS(){
  dem1.textContent = "00";
  dem2.textContent = "00";
  dem3.textContent = "00";
  dem4.textContent = "00";
  second=0;
  mlsecond=0;
  minute=0;

  checkStart = 0;
  if(checkStart ===0 ){begin.textContent = 'Start'};

}

function pause(){
  clearInterval(cnt1);
}

function start(){
cnt1 = setInterval(function(){
  dem1.textContent = mlsecond.toString().padStart(2,"0");
  mlsecond++;
if(mlsecond===59){
  mlsecond=0;
  second++;
  dem2.textContent = second.toString().padStart(2,"0")+'';
  if(second===59){
    second=-1;
  }if(second===0){
        minute++;
    dem3.textContent= minute.toString().padStart(2,"0")+'';
  }
  if(minute===59){
    minute=-1;
    if(minute===0){
      hours++;
      dem4.textContent= hours.toString().padStart(2,"0")+'';
    }
    
  }
}
},1000/60+1);
 }

// xử lí ngày tháng năm hiện tại
let year = document.querySelector('.year');
let time1 = document.querySelector('.time');
const day = ["Chủ nhật","Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function time(){
  let now = new Date();
  let thu = day[now.getDay()];
  let ngay = now.getDate();
  let thang = now.getMonth()+1;
  let gio = now.getHours().toString().padStart(2,"0");
  let phut = now.getMinutes().toString().padStart(2,"0");
  let giay = now.getSeconds().toString().padStart(2,"0");
  year.textContent = `${thu}, ${ngay} tháng ${thang}`;
  time1.textContent = `${gio} : ${phut} : ${giay}`;
  setTimeout(time,1000);
}
time();


