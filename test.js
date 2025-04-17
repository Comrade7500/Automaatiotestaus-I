import { tarkistaSalasana } from './TestaaSalasanaPieni.js';

function suoritaTestit() {
    const testit = [
        { syöte: 'Valid123!@', odotettu: true, kuvaus: 'Hyvä salasana läpäisee kaikki tarkistukset' },
        { syöte: 'Val1!', odotettu: false, kuvaus: 'Liian lyhyt salasana epäonnistuu' },
        { syöte: 'valid123!@', odotettu: false, kuvaus: 'Puuttuva iso kirjain epäonnistuu' },
        { syöte: 'VALID123!@', odotettu: false, kuvaus: 'Puuttuva pieni kirjain epäonnistuu' },
        { syöte: 'ValidPassword!', odotettu: false, kuvaus: 'Puuttuva numero epäonnistuu' },
        { syöte: 'Valid12345', odotettu: false, kuvaus: 'Puuttuva erikoismerkki epäonnistuu' },
    ];

    let läpäisty = 0;

    testit.forEach((testi, indeksi) => {
        const tulos = tarkistaSalasana(testi.syöte);
        if (tulos === testi.odotettu) {
            console.log(` Testi ${indeksi + 1} läpäisty: ${testi.kuvaus}`);
            läpäisty++;
        } else {
            console.log(` Testi ${indeksi + 1} epäonnistui: ${testi.kuvaus}`);
            console.log(`   Syöte: "${testi.syöte}" | Odotettu: ${testi.odotettu} | Saatiin: ${tulos}`);
        }
    });

    console.log(`\n${läpäisty}/${testit.length} testiä läpäisty.`);
}


suoritaTestit();