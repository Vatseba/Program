function fire() {
	
    var rad1=document.getElementsByName('choose1');
    var rad2=document.getElementsByName('choose2');
    var rad3=document.getElementsByName('choose3');
    for (var a=0;a<rad1.length; a++) {
        if (rad1[a].checked) {
            //alert(a+1);

            
            for (var b=0;b<rad2.length; b++) {
              if (rad2[b].checked) {
                //alert(b+1);

                for (var c=0;c<rad3.length; c++) {
                  if (rad3[c].checked) {
                    //alert(c+1);
                    var j = a+1+b+1+c+1;
                    document.getElementById('txt').innerHTML = j;
                  }
                }
              }
            }
        }
    } 
}