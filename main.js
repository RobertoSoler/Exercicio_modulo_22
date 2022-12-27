const dataDoEvento = new Date("Jun 29, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const Entrada = new Date();
const timeStampEntrada = Entrada.getTime();

const contaAsHoras = setInterval(function() {

    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador1').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

}, 1000);

document.addEventListener('DOMContentLoaded', function() {

    contaTempo;

});

const contaTempo = setInterval(function() {

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampAtual - timeStampEntrada;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    if(minutosAteOEvento==0) {
        document.getElementById('contador2').innerHTML = `${segundosAteOEvento}s`;
    } else {
        document.getElementById('contador2').innerHTML = `${minutosAteOEvento}m ${segundosAteOEvento}s`;
    }

}, 1000);