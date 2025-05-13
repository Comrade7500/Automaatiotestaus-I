import { laskeVertausluvut } from '../vertausluku.js';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('laskeVertausluvut', () => {
    it('järjestää listan äänimäärän mukaan laskevasti', () => {
        const lista = [
            { numero: 101, nimi: "Maija Meikäläinen", aanet: 1 },
            { numero: 102, nimi: "Kalle Korhonen", aanet: 4 }
        ];

        const tulos = laskeVertausluvut(lista);
        assert.strictEqual(tulos[0].aanet, 4);
        assert.strictEqual(tulos[1].aanet, 1);
    });

    it('arpoo saman äänimäärän saaneiden järjestyksen ja lisää arvottu-kentän', () => {
        const lista = [
            { numero: 103, nimi: "Sari Virtanen", aanet: 2 },
            { numero: 104, nimi: "Jukka Jokinen", aanet: 2 },
            { numero: 105, nimi: "Pekka Peloton", aanet: 1 }
        ];

        const tulos = laskeVertausluvut(lista);
        const samanAanimaara = tulos.filter(e => e.aanet === 2);

        assert.strictEqual(samanAanimaara.length, 2);
        assert.ok(samanAanimaara.every(e => e.arvottu === true));
    });

    it('ei lisää arvottu-kenttää, jos äänimäärä on yksilöllinen', () => {
        const lista = [
            { numero: 106, nimi: "Anna Ankka", aanet: 3 },
            { numero: 107, nimi: "Aku Ankka", aanet: 2 }
        ];

        const tulos = laskeVertausluvut(lista);
        assert.strictEqual(tulos[0].arvottu, undefined);
        assert.strictEqual(tulos[1].arvottu, undefined);
    });
});