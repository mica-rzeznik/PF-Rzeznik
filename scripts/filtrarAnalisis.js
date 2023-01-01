const analisis = []
const filtro = document.querySelector("input#filtrarAnalisis")
//El precio final es la unidad bioquímica por el valor de esta que es 200 pesos

fetch('../json/analisis.json')
    .then((response)=>data=response.json())
    .then((data) => analisis.push(...data))
    .then(() => listarAnalisisHTML(analisis))

function listarAnalisisHTML(array) {
    const tabla = document.querySelector("tbody")
        tabla.innerHTML = ""
        array.forEach((analisis) => {
            tabla.innerHTML += `<tr>
                                    <td>${analisis.ensayo}</td>
                                    <td>${analisis.indicacion}</td>
                                    <td>$ ${analisis.unidadBioquimica.toLocaleString()*200}</td>
                                <tr>`
        })
    document.getElementById("mensajeError").classList.add('mensajeError')
}

function filtrar() {
    let encontrados = analisis.filter((analisis)=> analisis.ensayo.toUpperCase().includes(filtro.value.toUpperCase().trim()))
    encontrados.length > 0 ? listarAnalisisHTML(encontrados) : document.getElementById("mensajeError").classList.remove('mensajeError')
}

filtro.addEventListener("search", filtrar)