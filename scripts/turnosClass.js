class Registro {
    constructor(rNombre, rDni, rEmail, rCelular, rCobertura, rSede, rExtrac, rFecha, rHora){
    this.rNombre=rNombre
    this.rDni=rDni
    this.rEmail=rEmail
    this.rCelular=rCelular
    this.rCobertura=rCobertura
    this.rSede=rSede
    this.rExtrac=rExtrac
    this.rFecha=rFecha
    this.rHora=rHora
    }
    registrar(){
        return `<tr>
                <td>${this.rNombre}</td>
                <td>${this.rDni}</td>
                <td>${this.rEmail}</td>
                <td>${this.rCelular}</td>
                <td>${this.rCobertura}</td>
                <td>${this.rSede}</td>
                <td>${this.rExtrac}</td>
                <td>${this.rFecha}</td>
                <td>${this.rHora}</td>
            </tr>`
    }
}