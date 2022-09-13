var par = [];

function mostraPar(x,y){
   while(x<=y){
      if((x%2)==0){
        par.push(x);
      }
      x++
   }
}
mostraPar(0,10);
alert(par);