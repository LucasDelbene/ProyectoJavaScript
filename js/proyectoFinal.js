function evaluarQuiz(){
    let respuestasCorrectas= ["HULK","TEVEZ","JULIAN ALVAREZ","FALCAO","MESSI"];
    let respuestasUsuario= new Array();
    let respuestasPregunta= new Array();
    let aciertos= 0;
    let countPreguntas= 0;
    let bien="CORRECTO"; 
    let mal="INCORRECTO";
    let imagenesRespuestas= new Array();
    
    for(var i=0; i <5; i++){
        respuestasPregunta= document.getElementsByName("p"+(i+1));
        for (var j=0; j <=3; j++){
           if(respuestasPregunta[j].checked==true){
            countPreguntas++;
            respuestasUsuario[i]= respuestasPregunta[j].value;
            if(respuestasPregunta[j].value==respuestasCorrectas[i]){
                imagenesRespuestas[i]= bien;
                aciertos++;
            }else{
                imagenesRespuestas[i]= mal;
            }
           }
        }
    }

    for(var i=0; i <5; i++){
        console.log("Respuesta "+(i+1)+" "+respuestasUsuario[i]+" Imagen "+imagenesRespuestas[i])
    }

    if(countPreguntas==5){
        html="<table class='table'>";
        html+="<tr>";
        html+="<td>QUIZ</td>";
        html+="<td>RESPUESTA USUARIO</td>";
        html+="<td>RESPUESTA CORRECTA</td>";
        html+="<td>RESULTADO</td>";
        html+="<tr>";
        for(var i=0; i <5; i++){
            html+="<tr>";
            html+="<td>"+(i+1)+"</td>";
            html+="<td>"+respuestasUsuario[i]+"</td>";
            html+="<td>"+respuestasCorrectas[i]+"</td>";
            html+="<td>"+imagenesRespuestas[i]+"</td>";
            html+="<tr>";
        }
        html+="</table>";
        document.getElementById("resultado").innerHTML=html;
    }else{
        Swal.fire({
            icon: 'error',
            text: 'FALTA RESPONDER PREGUNTAS',
          })
    }
}

function resetQuiz(){
    for(var i=0; i <5; i++){
        respuestasPregunta= document.getElementsByName("p"+(i+1));
        for (var j=0; j <=3; j++){
          respuestasPregunta[j].checked=false;
        }
    }
}

//IMAGENES DE LOS FUTBOLISTAS
//APLIQUE SWEET ALERT 2
//QUIZ 1
const botonRicharlison = document.getElementById("botonRicharlison")
botonRicharlison.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "RICHARLISON",
        imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TODXGYVLFV4EFE5I6L4JPC63L4.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonDouglas = document.getElementById("botonDouglas")
botonDouglas.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "DOUGLAS",
        imageUrl: 'https://www.diez.hn/binrepository/1024x630/0c0/0d0/none/3014757/WQJH/webDOUGLAS_DZ978890_MG92953646.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonHulk = document.getElementById("botonHulk")
botonHulk.addEventListener('click', () =>{
    Swal.fire({
        icon: "success",
        title: "HULK",
        imageUrl: 'https://www.elespectador.com/resizer/4gkJKSr5uES_R7zNuqC0gALtoMQ=/525x350/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/YU3GX3RPJNAM7DP27EW3CBGHJU.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonMalcom = document.getElementById("botonMalcom")
botonMalcom.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "MALCOM",
        imageUrl: 'https://www.fdpradio.com/wp-content/uploads/2021/07/descarga-2021-07-14t125236-435.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})


//QUIZ 2
const botonHiguain = document.getElementById("botonHiguain")
botonHiguain.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "HIGUAIN",
        imageUrl: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Cagliari-Calcio-v-Juventus---Serie-A-bf819390d17f70a6fd695861ee46fb74.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonTevez = document.getElementById("botonTevez")
botonTevez.addEventListener('click', () =>{
    Swal.fire({
        icon: "success",
        title: "TEVEZ",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrsZhWHvy0WmqLXlpw5eHKP9vwZn1gl0LQA&usqp=CAU',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonDybala = document.getElementById("botonDybala")
botonDybala.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "DYBALA",
        imageUrl: 'https://fotos.perfil.com/2022/06/22/trim/720/410/dybala-1375299.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonDiMaria = document.getElementById("botonDiMaria")
botonDiMaria.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "DI MARIA",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-FrUdGSvjyE7Xa-c78qoKSXCYJuUmPk8KQ&usqp=CAU',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})


//QUIZ 3
const botonAlario = document.getElementById("botonAlario")
botonAlario.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "LUCAS ALARIO",
        imageUrl: 'https://www.infobae.com/new-resizer/Q-GBmmiit4vSyz3tR-9gca4tbG4=/1024x512/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/08/25070333/0002672234.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonAguero = document.getElementById("botonAguero")
botonAguero.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "KUN AGUERO",
        imageUrl: 'https://www.infiernorojo.com/independiente/wp-content/uploads/2020/04/aguero.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonBuendia = document.getElementById("botonBuendia")
botonBuendia.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "EMI BUENDIA",

        imageUrl: 'https://i.guim.co.uk/img/media/2e0c65208be177b8d39d25aeef8d8a39725bca94/69_196_2324_1394/master/2324.jpg?width=620&quality=85&fit=max&s=1312378e53467371dd6bb1fc4208dc3c',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonJulian = document.getElementById("botonJulian")
botonJulian.addEventListener('click', () =>{
    Swal.fire({
        icon: "success",
        title: "JULIAN ALVAREZ",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBOJdQJjY0lk6vaDeml2rteFRaoZB_AER3w&usqp=CAU',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})


//QUIZ 4 
const botonJames = document.getElementById("botonJames")
botonJames.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "JAMES RODRIGUEZ",
        imageUrl: 'https://www.minutoencancha.com/u/fotografias/m/2022/2/1/f608x342-10005_39728_31.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonLuisDiaz = document.getElementById("botonLuisDiaz")
botonLuisDiaz.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "LUIS DIAZ",
        imageUrl: 'https://tmssl.akamaized.net/images/foto/galerie/luis-diaz-seleccion-colombia-1626823641-67575.png?lm=1626823651',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonDuvanZapata = document.getElementById("botonDuvanZapata")
botonDuvanZapata.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "DUVAN ZAPATA",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBYL4gIWieQZB4czIbqiovIFY3N-RTnm7WA&usqp=CAU',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonFalcao = document.getElementById("botonFalcao")
botonFalcao.addEventListener('click', () =>{
    Swal.fire({
        icon: "success",
        title: "FALCAO",
        imageUrl: 'https://www.futbolred.com/files/article_main/files/crop/uploads/2020/10/05/5f7b285f351f7.r_1602250629150.0-47-1600-847.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})


//QUIZ 5
const botonPapuGomez = document.getElementById("botonPapuGomez")
botonPapuGomez.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "PAPU GOMEZ",
        imageUrl: 'https://elcomercio.pe/resizer/ioOD0hVMQs_V9fYHtfgvGvLufLQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/E6GF5XNH75EXZC2UBWJZKHGDU4.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonLautaroMartinez = document.getElementById("botonLautaroMartinez")
botonLautaroMartinez.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "LAUTARO MARTINEZ",
        imageUrl: 'https://tntsports.com.ar/__export/1594475384863/sites/tntsports/img/2020/07/06/lautaro-martinez-triste-inter-cabeza-gacha.jpg_1902800913.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})

const botonMessi = document.getElementById("botonMessi")
botonMessi.addEventListener('click', () =>{
    Swal.fire({
        icon: "success",
        title: "MESSI",
        imageUrl: 'https://media.canalnet.tv/2019/07/messi-3-859x550.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})


const botonAngelCorrea = document.getElementById("botonAngelCorrea")
botonAngelCorrea.addEventListener('click', () =>{
    Swal.fire({
        icon: "error",
        title: "ANGEL CORREA",
        imageUrl: 'https://eltiempomx.com/cdn-cgi/image/format=auto,width=730/monclova/2021/08/6122b63986ead.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'custom image',
    })
})