setInterval(()=>{
  let t=new Date();
  thour=t.getHours()
  tminute=t.getMinutes()
  tsecond=t.getSeconds()
  hrotation=thour*30+tminute/2;
  mrotation=tminute*6
  srotation=tsecond*6
  hour.style.transform=`rotate(${hrotation}deg)`;
  minute.style.transform=`rotate(${mrotation}deg)`;
  second.style.transform=`rotate(${srotation}deg)`;

  
},1000)