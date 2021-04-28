$(function(){
    for (var i = 0; i < kepek.length; i++) {
        $("div").append("<img>");
        $("div img").eq(i).attr("src",startPic.eleresiUt);
        $("div img").eq(i).attr("alt",startPic.alt);
        $("div img").eq(i).attr("id",i);
    }
    $("div img").click(kattintasra);
});

var startPic={
    eleresiUt:"pics/start.jpg",
    alt:"start"
};
var wrongPic={
    eleresiUt:"pics/wrong.jpg",
    alt:"wrong"
};
var kep1={
    eleresiUt:"pics/bmw.jpg",
    alt:"BMW"
};
var kep2={
    eleresiUt:"pics/r8.jpg",
    alt:"R8"
};
var kep3={
    eleresiUt:"pics/488.jpg",
    alt:"488"
};
var kep4={
    eleresiUt:"pics/c63s.jpg",
    alt:"C63S"
};
var kep5={
    eleresiUt:"pics/huracan.jpg",
    alt:"Huracan"
};
var kep6={
    eleresiUt:"pics/supra.jpg",
    alt:"Supra"
};

var alapkepek=$("div img");
var kepek=[kep1,kep3,kep2,kep6,kep5,kep4,kep3,kep6,kep5,kep4,kep2,kep1];

function kattintasra() {
    var id=$(this).attr("id");
    $(this).attr("src",kepek[id].eleresiUt);
    $(this).attr("alt",kepek[id].alt);
    $(this).attr("id",id);
    var jeloltek=[];
    jeloltek+=[id];
    console.log(jeloltek.length);
    console.log(jeloltek);
    if (jeloltek.length===2) {
        if (jeloltek[0]===jeloltek[1]){
            
        }
        else {
            $(jeloltek[0]).attr("src",startPic.eleresiUt);
            $(jeloltek[0]).attr("alt",startPic.alt);
            $(jeloltek[0]).attr("id",id);
            $(jeloltek[1]).attr("src",startPic.eleresiUt);
            $(jeloltek[1]).attr("alt",startPic.alt);
            $(jeloltek[1]).attr("id",id);
            jeloltek=[];
        }
    }
    };