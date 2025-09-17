//Logica: Enviar edad, entregar un diccionario conforme la edad

var mensajeID = document.getElementById("idMensaje")
var formularioID = document.getElementById("idLogin")
var listadoID = document.getElementById("idListado")

function areasLaborales(tipoLabor, saludo_bienvenida){
    let enlistado = {};
    mensajeID.textContent = saludo_bienvenida
    if(tipoLabor){
        //Para mayor de edad
        enlistado = {
            Frontend: "HTML, CSS, JavaScript, React, Angular, Vue.js",
            Backend: "Node.js, Django, Flask, Ruby on Rails, Spring",
            Fullstack: "MEAN Stack, MERN Stack, LAMP Stack",
            Mobile: "React Native, Flutter, Swift, Kotlin",
            DataScience: "Python, R, SQL, TensorFlow",
            DevOps: "Docker, Kubernetes, Jenkins, Ansible",
            MachineLearning: "Python, R, TensorFlow, PyTorch",
            Seguridad: "Firewalls, Encryption, Penetration Testing",
            Cloud: "AWS, Azure, Google Cloud Platform"
        };
    }else{
        //Edad suficiente pero no para trabajo formal
        enlistado = {
            Freelancer: "Desarrollar soluciones de forma independiente",
            Frontend: "Lo basico de HTML, CSS, JS",
            UI_UX: "Diseñador grafico"
        };
    }
    return enlistado
}

function OportunidadesEdad(edad, nombre){
    let saludo_bienvenida = "Bienvendio " + nombre
    let saludo_rechazo = "Lo lamento " + nombre + ", en el campo laboral formal e informal es casi reducido por tu edad"
    if (edad>17) {
        
        //Para mostrar areas laborales Formales en empresas
        tipoLabor = true 
         return enlistado = areasLaborales(tipoLabor, saludo_bienvenida)
    }else if(edad>14 && edad <=17){

        //Para mostrar areas laborales Informales
        tipoLabor = false
        return enlistado = areasLaborales(tipoLabor, saludo_bienvenida)
    }else{
        mensajeID.textContent = saludo_rechazo
        return enlistado = {Empleos: "Null"}
    }
}

function main() {
    formularioID.addEventListener('submit', (event)=>{
        event.preventDefault();

        const datos = new FormData(formularioID);
        let nombre = datos.get('getNombre');
        const edad = parseInt(datos.get('getEdad'),10)

        if(nombre == ""){
            nombre = "Usuario"
        }

        enlistado = OportunidadesEdad(edad, nombre);

        //listadoID.textContent = JSON.stringify(enlistado)
        let html = "<ul>";
        for (const [key, value] of Object.entries(enlistado)) {
        html += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        html += "</ul>";

        listadoID.innerHTML = html;
    });
}

main()