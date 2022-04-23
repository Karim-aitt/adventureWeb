
/* MENU INICIO Y EXPLICACION */
document.getElementById("botonCerrar").addEventListener("click", function(){
    document.getElementById("cajaInicio").style="display: none";
    document.getElementById("cajaAventura").style="display: inherit"
})


// ----------------------------------------------------------------- //
let textoInicio = document.getElementById("textoAventura")

let boton1 = document.getElementById("button1")
let boton2 = document.getElementById("button2")
let boton3 = document.getElementById("button3")

/* TRAMA */


boton1.addEventListener("click", function (){

    textoInicio.innerHTML = "Vas galopando en todo tu explendor hacia los gritos y te encuentras con que tres maleantes están golpeando a un pobre campesino con la intención de robarle su burro y sus pertenencias.<br><strong>¿Qué haces?</strong><br><strong>1</strong> Cargo hacía los maleantes<br><strong>2</strong> Me uno a los maleantes y robamos el burro<br><strong>3</strong> Me doy media vuelta y que se apañe el campesino."

    boton1.id = "button1-2"
    boton2.id = "button2-1"
    boton3.id = "button3-1"

    boton1.addEventListener("click", function (){
        

        textoInicio.innerHTML = "Los maleantes se encogen de miedo al verte cargar hacía ellos con espada en ristre y chillan como gallinas aterrorizadas... pero nada pueden hacer y tres cabezas ruedan ahora por el suelo.<br><br> El campesino se levanta con una mueca de dolor y sonríe al ver la escena, con lágrimas en los ojos te da las gracias y te ofrece una bolsa de monedas por la ayuda. 'Tome señor, es todo lo que tengo, pero vale menos que mi vida'<br><br><strong>¿Qué haces?</strong><br><strong>1</strong> Cojo la bolsa y la guardo.<br><strong>2</strong> Niego con la cabeza, es mi deber como caballero.<br><strong>3</strong> Coge la bolsa y le escupes, ten más cuidado la próxima vez sucio campesino."
    
        boton1.id = "button1-3"
        boton2.id = "button2-2"
        boton3.id = "button3-2"

        document.getElementById("button1-3").addEventListener("click", function (){

            textoInicio.innerHTML = "Te alejas por el camino en dirección al festival de Caballeria con una bolsa llena de monedas lista para ser gastada en cerveza, como un buen caballero...<br><br><strong>FIN</strong>"

            document.getElementById("cajaBotones").style="visibility: hidden;"

            document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })

        }) //end boton 1 1 1

        document.getElementById("button2-2").addEventListener("click", function (){

            textoInicio.innerHTML = "Te alejas por el camino en dirección al festival de Caballeria con una sonrisa y la satisfacción del deber cumplido. <br><br><strong>Reputación +100</strong><br><br><em>Este es el camino.</em><br><br><strong>FIN</strong>"
        
            document.getElementById("cajaBotones").style="visibility: hidden;"

            document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })
            
        }) //end boton 1 1 2

        document.getElementById("button3-2").addEventListener("click", function (){
            
            textoInicio.innerHTML = "Cuando te das la vuelta, el campesino mira hacia el suelo... aprieta el puño e implora a los dioses por justicia...<br><br> Instantaneamente cae un rayo del cielo encima tuya. <br><br><strong>KARMA -1000</strong><br><br><strong>GAME OVER</strong>"
        
            document.getElementById("cajaBotones").style="visibility: hidden;"

            document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })
        }) //end boton 1 1 3
    })

    boton2.addEventListener("click", function (){

        textoInicio.innerHTML = "¿Hey chicos, que tal si nos repartimos ese botín que tiene el burro? No me gustaría tener que cortaros la cabeza. <br><br>-- Los hombres te miran extrañados y asienten mirandose entre sí -- <br><br> Te acercas a ellos dispuesto a coger el burro pero antes de que puedas hacerlo notas algo que no te deja moverte, al mirar hacia abajo ves que una punta afilada de lanza te atraviesa el pecho... <br><br><strong>GAME OVER</strong>"

        document.getElementById("cajaBotones").style="visibility: hidden;"

        document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })
    }) //end  boton 1 2


    boton3.addEventListener("click", function (){

        textoInicio.innerHTML = "No voy a ensuciar mis limpias ropas por un campesino mugriento, mientras te vas alejando escuchas los gritos ahogados del campesino... <br><br><strong>GAME OVER</strong> Eres de todo, menos un caballero."
    
        document.getElementById("cajaBotones").style="visibility: hidden;"

        document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })
    }) //end boton 1 3

})




boton2.addEventListener("click", function (){

    textoInicio.innerHTML = "Dejas a tu caballo atado en un árbol del camino y te acercas a los gritos sigilosamente, y te encuentras con que unos maleantes están golpeando a un pobre campesino con la intención de robarle su burro y sus pertenencias.<br><strong>¿Qué haces?</strong><br><strong>1</strong> Desenvaino mi espada y corro hacia los maleantes<br><strong>2</strong> Me uno a los maleantes y robamos el burro<br><strong>3</strong> Me doy media vuelta y me voy, sucios campesinos..."

    boton1.id = "button12"
    boton2.id = "button21"
    boton3.id = "button31"

    boton1.addEventListener("click", function(){

        textoInicio.innerHTML = "Corres hacia los maleantes gritando ¡Por Tutátis! (Lo que quiera que sea eso...) y trás un breve combate te alzas triunfante sobre esos miserables.<br><br> El campesino se levanta con una mueca de dolor y sonríe al ver la escena, con lágrimas en los ojos te da las gracias y te ofrece una bolsa de monedas por la ayuda. 'Tome señor, es todo lo que tengo, pero vale menos que mi vida'<br><br><strong>¿Qué haces?</strong><br><strong>1</strong> Cojo la bolsa y la guardo.<br><strong>2</strong> Niego con la cabeza, es mi deber como caballero.<br><strong>3</strong> Coge la bolsa y le escupes, ten más cuidado la próxima vez sucio campesino."

        boton1.id = "button1-3"
        boton2.id = "button2-2"
        boton3.id = "button3-2"

        document.getElementById("button1-3").addEventListener("click", function (){

            textoInicio.innerHTML = "Te alejas por el camino en dirección al festival de Caballeria con una bolsa llena de monedas lista para ser gastada en cerveza, como un buen caballero...<br><br><strong>FIN</strong>"

            document.getElementById("cajaBotones").style="visibility: hidden;"

            document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })
        }) //end boton 1 1 1

        document.getElementById("button2-2").addEventListener("click", function (){

            textoInicio.innerHTML = "Te alejas por el camino en dirección al festival de Caballeria con una sonrisa y la satisfacción del deber cumplido. <br><br><strong>Reputación +100</strong><br><br><em>Este es el camino.</em><br><br><strong>FIN</strong>"
        
            document.getElementById("cajaBotones").style="visibility: hidden;"

            document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })
        }) //end boton 1 1 2

        document.getElementById("button3-2").addEventListener("click", function (){
            
            textoInicio.innerHTML = "Cuando te das la vuelta, el campesino mira hacia el suelo... aprieta el puño e implora a los dioses por justicia...<br><br> Instantaneamente cae un rayo del cielo encima tuya. <br><br><strong>KARMA -1000</strong><br><br><strong>GAME OVER</strong>"
        
            document.getElementById("cajaBotones").style="visibility: hidden;"

            document.getElementById("butonEnd").style="display: inherit"
            document.getElementById("butonEnd").addEventListener("click", function(){
                window.location.reload()
            })
        }) //end boton 1 1 3
    })

})




boton3.addEventListener("click", function (){

    textoInicio.innerHTML = "Parece que no te gustan las aventuras... :( <br><br><strong>GAME OVER</strong>"

    document.getElementById("cajaBotones").style="visibility: hidden;"

    document.getElementById("butonEnd").style="display: inherit"
    document.getElementById("butonEnd").addEventListener("click", function(){
        window.location.reload()
    })
})




