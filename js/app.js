startPoint = "x" ;
var remis = 0 ;

tabela.addEventListener("click",clickField) ;
function clickField(e){
    remis ++ ;
    console.log(e.target) ;

    if(e.target.innerHTML == ""){
        e.target.innerHTML = startPoint ; 
        if(startPoint == "x"){
            startPoint = "o"
        } else{
            startPoint = "x"
        }
    }
    p1 = document.getElementById("p1").innerHTML ;
    p2 = document.getElementById("p2").innerHTML ;
    p3 = document.getElementById("p3").innerHTML ;
    p4 = document.getElementById("p4").innerHTML ;
    p5 = document.getElementById("p5").innerHTML ;
    p6 = document.getElementById("p6").innerHTML ;
    p7 = document.getElementById("p7").innerHTML ;
    p8 = document.getElementById("p8").innerHTML ;
    p9 = document.getElementById("p9").innerHTML ;

    wyn1 = p1 + p2 + p3 ;
    wyn2 = p4 + p5 + p6 ;
    wyn3 = p7 + p8 + p9 ;
    wyn4 = p1 + p4 + p7 ;
    wyn5 = p2 + p5 + p8 ;
    wyn6 = p3 + p6 + p9 ;
    wyn7 = p7 + p5 + p3 ;
    wyn8 = p1 + p5 + p9 ;

    console.log(wyn1) ;
    if(wyn1 == "xxx"){
        document.getElementById("p1").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p2").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p3").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn2 == "xxx"){
        document.getElementById("p4").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p6").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn3 == "xxx"){
        document.getElementById("p7").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p8").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p9").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn4 == "xxx"){
        document.getElementById("p1").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p4").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p7").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn5 == "xxx"){
        document.getElementById("p2").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p6").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn6 == "xxx"){
        document.getElementById("p3").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p6").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p7").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn7 == "xxx"){
        document.getElementById("p7").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p3").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn8 == "xxx"){
        document.getElementById("p1").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("p9").innerHTML = '<div style="color:lime;">x</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KRZYŻYKI</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }





    if(wyn1 == "ooo"){
        document.getElementById("p1").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p2").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p3").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn2 == "ooo"){
        document.getElementById("p4").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p6").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn3 == "ooo"){
        document.getElementById("p7").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p8").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p9").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn4 == "ooo"){
        document.getElementById("p1").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p4").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p7").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn5 == "ooo"){
        document.getElementById("p2").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p6").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn6 == "ooo"){
        document.getElementById("p3").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p6").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p7").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn7 == "ooo"){
        document.getElementById("p7").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p3").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }
    if(wyn8 == "ooo"){
        document.getElementById("p1").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p5").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("p9").innerHTML = '<div style="color:lime;">o</div>' ;
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">WYGRAŁY KÓŁKA</div>' ;
        tabela.removeEventListener("click",clickField) ;
        remis = 0 ;
    }

    if(remis == 9){
        document.getElementById("info").innerHTML = '<div style="font-size:70px;">REMIS</div>' ;
        remis = 0 ;
    }
}

reset.addEventListener("click",action) ;
function action(e){
    
    document.getElementById("p1").innerHTML = "" ;
    document.getElementById("p2").innerHTML = "" ;
    document.getElementById("p3").innerHTML = "" ;
    document.getElementById("p4").innerHTML = "" ;
    document.getElementById("p5").innerHTML = "" ;
    document.getElementById("p6").innerHTML = "" ;
    document.getElementById("p7").innerHTML = "" ;
    document.getElementById("p8").innerHTML = "" ;
    document.getElementById("p9").innerHTML = "" ;
    document.getElementById("info").innerHTML = "";
    tabela.addEventListener("click",clickField) ;
    remis = 0 ;
    startPoint = "x" ;

} 

