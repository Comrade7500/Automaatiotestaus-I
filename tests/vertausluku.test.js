const { laskeVertausluvut } = require( '../vertausluku.js');

describe('laskeVertausluvut', () => {
  it('järjestää listan äänimäärän mukaan laskevasti', () => {
    const lista = [
      { numero: 101, nimi: "Maija Meikäläinen", aanet: 1 },
      { numero: 102, nimi: "Kalle Korhonen", aanet: 4 }
    ];

    const tulos = laskeVertausluvut(lista);
    expect(tulos[0].aanet).toBe(4);
    expect(tulos[1].aanet).toBe(1);
  });

  it('arpoo saman äänimäärän saaneiden järjestyksen ja lisää arvottu-kentän', () => {
    const lista = [
      { numero: 103, nimi: "Sari Virtanen", aanet: 2 },
      { numero: 104, nimi: "Jukka Jokinen", aanet: 2 },
      { numero: 105, nimi: "Pekka Peloton", aanet: 1 }
    ];

    const tulos = laskeVertausluvut(lista);
    const samanAanimaara = tulos.filter(e => e.aanet === 2);

    expect(samanAanimaara.length).toBe(2);
    expect(samanAanimaara.every(e => e.arvottu === true)).toBe(true);
  });

  it('ei lisää arvottu-kenttää, jos äänimäärä on yksilöllinen', () => {
    const lista = [
      { numero: 106, nimi: "Anna Ankka", aanet: 3 },
      { numero: 107, nimi: "Aku Ankka", aanet: 2 }
    ];

    const tulos = laskeVertausluvut(lista);
    expect(tulos[0].arvottu).toBeUndefined();
    expect(tulos[1].arvottu).toBeUndefined();
  });
});
