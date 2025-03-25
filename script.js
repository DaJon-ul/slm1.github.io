const versos = [
    { texto: "Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe fácilmente!", cita: "Eclesiastés 4:12" },
    { texto: "Les aseguro que si dos de ustedes se ponen de acuerdo en la tierra para pedir algo a Dios que está en el cielo, él se lo dará", cita: "Mateo 18:19" },
    { texto: "Porque yo sé los planes que tengo para ustedes, dice el Señor.", cita: "Jeremías 29:11" },
    { texto: "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.", cita: "1 Corintios 13:4" },
    { texto: "Sobre todo, ámense los unos a los otros profundamente, porque el amor cubre multitud de pecados.", cita: "1 Pedro 4:8" },
    { texto: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor.", cita: "1 Juan 4:16" },
    { texto: "Hagan todo con amor.", cita: "1 Corintios 16:14" },
    { texto: "El amor nunca deja de ser.", cita: "1 Corintios 13:8" },
    { texto: "Por tanto, lo que Dios ha unido, no lo separe el hombre", cita: "Marcos 10:9" },
    { texto: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él.", cita: "Juan 4:16"},
    { texto: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece.", cita: "1 Corintios 13:4"},
    { texto: "El amor todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.", cita: "1 Corintios 13:7"},
    { texto: "Pon tu vida en sus manos, confía plenamente en él, y él actuará en tu favor.", cita: "Salmos 37:5"}
];

function mostrarVerso() {
    const index = Math.floor(Math.random() * versos.length);
    document.getElementById('verso').innerHTML = `<p>"${versos[index].texto}"</p><p><em>- ${versos[index].cita}</em></p>`;
}
