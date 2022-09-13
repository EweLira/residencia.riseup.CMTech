function habilidades(){
    var skill = prompt("Digite sua skill: ")

    if(skill.includes('javascript')) {
       alert(true);
     } else {
       alert(false);
     } 
  }

  var skill = ['javascript', 'reactjs', 'react native'];
  var resultado = habilidades();