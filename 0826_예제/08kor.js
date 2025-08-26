function myscore(){
    var kor = 30 ;
    var eng = 90 ;
    var total=0, avg=0 ;
    var message = "";

    total = kor + eng ;
    avg = total / 2 ;
    console.log("총점=" + total);
    console.log("평균=" + avg);

    message = "<b>총점 = " + total + " 평균 = " + avg +"</b><br>" ;
    //document.writeln(message); //비권장
    document.querySelector("#display").innerHTML = message ; //권장
    //document.getElementById("display").innerHTML = message ; //권장
    //에러아님,작동안됨 document.getElementById("display").innerhtml = message ; 
    //에러아님,작동안됨 document.querySelector("#display").innerhtml = message ;
}//end