
 var j=0;
 var cells;
 
 window.onload = function level_1() {
 	var matrix=document.createElement('div');
 	matrix.id='matrix';
    var parentElem=document.body;
    parentElem.appendChild(matrix);
    var w=10;
    var h=10;
    var n=w*h;
    var cell=[];
    
    matrix.style.width=(w*40).toString()+'px';
    matrix.style.height=(h*40).toString()+'px';

    var buttons=document.getElementsByTagName('button'); 
    for (var i = 0; i < buttons.length; i++) {
    	var btnId=['up', 'down','left','right'];
    	buttons[i].id=btnId[i];
    }
    for (var a = 1; a <= n; a++) {
 	  cell[a]=document.createElement('div');
 	  cell[a].onclick=function () {
 	  	var oldCell=document.getElementsByClassName('player');
        var newCell=this;
 	  	oldCell[0].classList.remove('player');
 	  	newCell.classList.add('player');
 	  	j=parseInt(this.id);
 	  	j-=1;
 	  };
 	  cell[a].id=a;
      cell[a].classList.add('cell');
      if (a===1) {cell[a].classList.add('player');}
 	  matrix.appendChild(cell[a]);
   }

    cells=document.getElementsByClassName('cell');

    var btnUp=document.getElementById('up');
 	var btnDw=document.getElementById('down');
 	var btnLeft=document.getElementById('left');
 	var btnRight=document.getElementById('right');

 	btnRight.onclick=function () {
 		var pos=cells[j];
 		var new_pos=cells[j+1];
 		if (j<=98) {
 			pos.classList.remove('player');
 		    new_pos.classList.add('player');
 		    j++;
 		    
 		} 
 		if (j===99) {
 			j=0; 
 			pos=cells[j];	
 			pos.classList.add('player');
 			new_pos.classList.remove('player');
 		  }
	};

 	btnLeft.onclick=function () {
 		var pos=cells[j];
 		var new_pos=cells[j-1]; 
    	pos.classList.remove('player');
 		new_pos.classList.add('player');
 		j--;
 		/*if (j==100) { pos.classList.remove('player'); j=0;};*/

 };

 btnUp.onclick=function () {
 		var pos=cells[j];
 		var new_pos=cells[j-10]; 
    	pos.classList.remove('player');
 		new_pos.classList.add('player');
 		j-=10;
 		

 };

 btnDw.onclick=function () {
 		var pos=cells[j];
 		var new_pos=cells[j+10]; 
    	pos.classList.remove('player');
 		new_pos.classList.add('player');
 		j+=10;
 		

}

};









 
 




