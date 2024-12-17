//Classe de abstração
function Aeronaves(nome, categoria, motor) {
    this.nome = nome;
    this.categoria = categoria;
    this.motor = motor;
}

//Herdeiras
function Aviao(nome, categoria, motor, tipoDeAsas) {
    Aeronaves.call(this, nome, categoria, motor);
    this.tipoDeAsas = tipoDeAsas;
}

function Helicoptero(nome, categoria, motor, tipoDeHelices) {
    Aeronaves.call(this, nome, categoria, motor)
    this.tipoDeHelices = tipoDeHelices;
}

//Instâncias de objetos
const aviaoComercial = new Aviao("Airbus A380", "Categoria D", "Rolls-Royce Trent 900", "Baixa e Flexível")
const aviaoExecutivo = new Aviao("Preator 600", "Categoria C", "Honeywell HTF 7500E", "Baixa e Varreada")
const helicopteroDeInstrucao = new Helicoptero("Robison R44", "Categoria A", "Lyconing IO-540", "Cíclico com T")


console.log(aviaoComercial)
console.log(aviaoExecutivo)
console.log(helicopteroDeInstrucao)