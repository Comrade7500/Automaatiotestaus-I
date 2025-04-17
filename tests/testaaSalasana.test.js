import { tarkistaSalasana } from '../TestaaSalasanaPieni.js';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('tarkistaSalasana', () => {
    it('palauttaa true, kun salasana täyttää kaikki vaatimukset', () => {
        const tulos = tarkistaSalasana('Valid123!@');
        assert.strictEqual(tulos, true);
    });

    it('palauttaa false, kun salasana on liian lyhyt', () => {
        const tulos = tarkistaSalasana('Val1!');
        assert.strictEqual(tulos, false);
    });

    it('palauttaa false, kun iso kirjain puuttuu', () => {
        const tulos = tarkistaSalasana('valid123!@');
        assert.strictEqual(tulos, false);
    });

    it('palauttaa false, kun pieni kirjain puuttuu', () => {
        const tulos = tarkistaSalasana('VALID123!@');
        assert.strictEqual(tulos, false);
    });

    it('palauttaa false, kun numero puuttuu', () => {
        const tulos = tarkistaSalasana('ValidPassword!');
        assert.strictEqual(tulos, false);
    });

    it('palauttaa false, kun erikoismerkki puuttuu', () => {
        const tulos = tarkistaSalasana('Valid12345');
        assert.strictEqual(tulos, false);
    });
});