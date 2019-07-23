    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var canvasWidth=canvas.width;
    var n=1;
    var n,k,i,y,x1;
    for (n=1;n<200;n++) {
      x1=0;
      y=300;
      x=200;
      y1=150;
      for (k=0;k<200&&x1<400;k++) {
        context.strokeStyle = '#ffff00';  
        if(k%2===0){
          context.beginPath();
          context.moveTo(x1,y1);
          context.lineTo(x,y);
          context.stroke();
          n++;
        }
        x1=x1+4; 
      }
      x1=4;
      y=0;
      x=200;
      y1=150;
      for (i=1;i<200&&x1<canvasWidth;i++) {
        context.strokeStyle = 'green';
        if (i%2!==0) {
          context.beginPath();
          context.moveTo(x1,y1);
          context.lineTo(x,y);
          context.stroke();
          n++;    
        }
        x1=x1+4;
      } 
    }
