let turnoPaciente = document.getElementById("formularioTurnos")
turnoPaciente.addEventListener("submit",validarForm)
const turnoAsignado = document.getElementById("turnoAsignado")
const pacientes =[]
let consultar = document.getElementById("btnConsultar")
consultar.addEventListener("click",turnosConsultar)


function validarForm(e){
    e.preventDefault()
    if(nombre.value && dni.value && email.value && celular.value && cobertura.value && sede.value && fecha.value && hora.value !==""){
        turnoAsignado.innerHTML=""
        turnoAsignado.innerHTML+=`Turno asignado a `+(nombre.value)+` para el día `+fecha.value+` a las `+hora.value
        let a = extrac.checked
        a==true ? extrac.value="Extracción a domicilio" : extrac.value="Extracción en sede"
        const paciente = new Registro (nombre.value,dni.value,email.value,celular.value,cobertura.value,sede.value,extrac.value,fecha.value,hora.value)
                pacientes.push(paciente)
                localStorage.setItem("turno", JSON.stringify(pacientes))
        Swal.fire({
            title: 'Turno asignado exitosamente',
            text: 'Turno asignado a '+nombre.value+' para el día '+fecha.value+' a las '+hora.value,
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }else{
        turnoAsignado.innerHTML=""
        turnoAsignado.innerHTML+=`Por favor, complete todos los campos solicitados`
        Swal.fire({
            title: 'Por favor, complete todos los campos solicitados',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}
const cargando = ()=>{
    return `<img src="../img/gif.gif" width="40px">`
}

function turnosConsultar() {
    const tablita = document.querySelector("tbody")
    tablita.innerHTML = ""
    const turnos = JSON.parse(localStorage.getItem("turno"))
    if (turnos.length > 0) {
        btnConsultar.innerHTML = cargando()
        setTimeout(() => {
            turnos.forEach((pacientes) => {
            tablita.innerHTML +=`<tr>
                                <td>${pacientes.rNombre}</td>
                                <td>${pacientes.rDni}</td>
                                <td>${pacientes.rEmail}</td>
                                <td>${pacientes.rCelular}</td>
                                <td>${pacientes.rCobertura}</td>
                                <td>${pacientes.rSede}</td>
                                <td>${pacientes.rExtrac}</td>
                                <td>${pacientes.rFecha}</td>
                                <td>${pacientes.rHora}</td>
                            <tr>`
            });
            btnConsultar.innerHTML = `Consultar turnos`
        }, 1000);
        
    }else{
        tablita.innerHTML =""
    }
}