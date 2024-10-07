var numero=Math.trunc(Math.random()*40)+10
        var cont=0;
        var suma=0;
        //Bucle 
        for(i=2;i<numero;i++){
            if(esPrimo(i)){
                document.getElementById("resul").innerHTML+=i+"<br>";
                suma+=i;
                console.log(suma)
                cont++
            }
        }

        media=Math.trunc(suma/cont);
        document.getElementById("contados").innerHTML+="Se han contado: "+cont;
        document.getElementById("media").innerHTML+="La media es: "+media;

        //Funcion para ver si el numero es primo
        function esPrimo(numero){
            let esPrimo=true
            for(let i=2;i<numero;i++){
                if(numero%i==0){
                    esPrimo=false
                }
            }
            return esPrimo
        }

        // final del programa