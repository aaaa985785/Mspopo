var car = document.getElementById('car');
if (localStorage.getItem("felix") != null) {
  //自定义代码
  // alert('key 存在')
  car.innerHTML = `購物車<i class="bi bi-exclamation-circle-fill" style="color:red"></i>`;
}else{ 
        // alert('key 不存在')
        car.innerHTML = '購物車';
}


$(document).ready(function () {
    $('.smun').click(function (e) { 
        e.preventDefault();
        $('.menu').toggleClass('open');
        $('.phonestyle').toggleClass('op');
    });
});

/*$(document).ready(function(){
  $("#NISSAN_bo").click(function(){
    $("#t1,#t2,#t3,#t4,#t5,#t6").remove();
    $("#n1,#n2,#n3").show();
  });
});

$(document).ready(function(){
  $("#TOYOTA_bo").click(function(){
    $("#n1,#n2,#n3").remove();
    $("#t1,#t2,#t3,#t4,#t5,#t6").show();
  });
});*/
function open_to(){
  document.querySelector('#one_1').style.display = "none";
  document.querySelector('#one_2').style.display = "block";
  document.querySelector('#one_3').style.display = "none";
  document.querySelector('#one_4').style.display = "none";
  document.querySelector('#one_5').style.display = "none";
  document.querySelector('#TOYOTA_bo').style.background = "#c18666";
  document.querySelector('#TOYOTA_bo').style.color = "#fff";
  document.querySelector('#NISSAN_bo').style.background = "#fff";
  document.querySelector('#NISSAN_bo').style.color = "#c18666";
  document.querySelector('#MAZDA_bo').style.background = "#fff";
  document.querySelector('#MAZDA_bo').style.color = "#c18666";
  document.querySelector('#FORD_bo').style.background = "#fff";
  document.querySelector('#FORD_bo').style.color = "#c18666";

}
function open_ne(){
  document.querySelector('#one_1').style.display = "none";
  document.querySelector('#one_2').style.display = "none";
  document.querySelector('#one_3').style.display = "block";
  document.querySelector('#one_4').style.display = "none";
  document.querySelector('#one_5').style.display = "none";
  document.querySelector('#TOYOTA_bo').style.background = "#fff";
  document.querySelector('#TOYOTA_bo').style.color = "#c18666";
  document.querySelector('#NISSAN_bo').style.background = "#c18666";
  document.querySelector('#NISSAN_bo').style.color = "#fff";
  document.querySelector('#MAZDA_bo').style.background = "#fff";
  document.querySelector('#MAZDA_bo').style.color = "#c18666";
  document.querySelector('#FORD_bo').style.background = "#fff";
  document.querySelector('#FORD_bo').style.color = "#c18666";
}
function open_ma(){
  document.querySelector('#one_1').style.display = "none";
  document.querySelector('#one_2').style.display = "none";
  document.querySelector('#one_3').style.display = "none";
  document.querySelector('#one_4').style.display = "block";
  document.querySelector('#one_5').style.display = "none";
  document.querySelector('#TOYOTA_bo').style.background = "#fff";
  document.querySelector('#TOYOTA_bo').style.color = "#c18666";
  document.querySelector('#NISSAN_bo').style.background = "#fff";
  document.querySelector('#NISSAN_bo').style.color = "#c18666";
  document.querySelector('#MAZDA_bo').style.background = "#c18666";
  document.querySelector('#MAZDA_bo').style.color = "#fff";
  document.querySelector('#FORD_bo').style.background = "#fff";
  document.querySelector('#FORD_bo').style.color = "#c18666";
  
}
function open_fo(){
  document.querySelector('#one_1').style.display = "none";
  document.querySelector('#one_2').style.display = "nonce";
  document.querySelector('#one_3').style.display = "none";
  document.querySelector('#one_4').style.display = "none";
  document.querySelector('#one_5').style.display = "block";
  document.querySelector('#TOYOTA_bo').style.background = "#fff";
  document.querySelector('#TOYOTA_bo').style.color = "#c18666";
  document.querySelector('#NISSAN_bo').style.background = "#fff";
  document.querySelector('#NISSAN_bo').style.color = "#c18666";
  document.querySelector('#MAZDA_bo').style.background = "#fff";
  document.querySelector('#MAZDA_bo').style.color = "#c18666";
  document.querySelector('#FORD_bo').style.background = "#c18666";
  document.querySelector('#FORD_bo').style.color = "#fff";
}


function toyota(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "flex";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#ff6e6e";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function nissan(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "flex";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#ff6e6e";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function mazda(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "flex";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#ff6e6e";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function ford(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "flex";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#ff6e6e";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function mitsubishi(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "flex";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#ff6e6e";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function porsche(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "flex";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#ff6e6e";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function mahindra(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "flex";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#ff6e6e";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function benz(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "flex";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#ff6e6e";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function suzuki(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "flex";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#ff6e6e";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function lexus(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "flex";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#ff6e6e";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function infiniti(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "flex";
  document.querySelector('#honda').style.display = "none";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#ff6e6e";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#7a7a77";
}
function honda(){
  document.querySelector('#eve').style.display = "none";
  document.querySelector('#toyota').style.display = "none";
  document.querySelector('#nissan').style.display = "none";
  document.querySelector('#mazda').style.display = "none";
  document.querySelector('#ford').style.display = "none";
  document.querySelector('#mitsubishi').style.display = "none";
  document.querySelector('#porsche').style.display = "none";
  document.querySelector('#mahindra').style.display = "none";
  document.querySelector('#benz').style.display = "none";
  document.querySelector('#suzuki').style.display = "none";
  document.querySelector('#lexus').style.display = "none";
  document.querySelector('#infiniti').style.display = "none";
  document.querySelector('#honda').style.display = "flex";
  document.querySelector('#TOYOTA').style.background = "#fff";
  document.querySelector('#TOYOTA').style.color = "#7a7a77";
  document.querySelector('#NISSAN').style.background = "#fff";
  document.querySelector('#NISSAN').style.color = "#7a7a77";
  document.querySelector('#MAZDA').style.background = "#fff";
  document.querySelector('#MAZDA').style.color = "#7a7a77";
  document.querySelector('#FORD').style.background = "#fff";
  document.querySelector('#FORD').style.color = "#7a7a77";
  document.querySelector('#MITSUBISHI').style.background = "#fff";
  document.querySelector('#MITSUBISHI').style.color = "#7a7a77";
  document.querySelector('#PORSCHE').style.background = "#fff";
  document.querySelector('#PORSCHE').style.color = "#7a7a77";
  document.querySelector('#MAHINDRA').style.background = "#fff";
  document.querySelector('#MAHINDRA').style.color = "#7a7a77";
  document.querySelector('#Mercedes-Benz').style.background = "#fff";
  document.querySelector('#Mercedes-Benz').style.color = "#7a7a77";
  document.querySelector('#SUZUKI').style.background = "#fff";
  document.querySelector('#SUZUKI').style.color = "#7a7a77";
  document.querySelector('#LEXUS').style.background = "#fff";
  document.querySelector('#LEXUS').style.color = "#7a7a77";
  document.querySelector('#INFINITI').style.background = "#fff";
  document.querySelector('#INFINITI').style.color = "#7a7a77";
  document.querySelector('#HONDA').style.background = "#fff";
  document.querySelector('#HONDA').style.color = "#ff6e6e";
}



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
});

var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    }
});



var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
});