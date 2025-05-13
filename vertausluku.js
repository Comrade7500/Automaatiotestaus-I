export function laskeVertausluvut(lista) {
    // Järjestetään lista äänimäärän mukaan laskevasti
    lista.sort((a, b) => b.aanet - a.aanet);

    // Käydään lista läpi ja tarkistetaan saman äänimäärän saaneet
    for (let i = 0; i < lista.length; i++) {
        const samanAanimaara = lista.filter(e => e.aanet === lista[i].aanet);

        if (samanAanimaara.length > 1) {
            // Arvotaan järjestys saman äänimäärän saaneille
            samanAanimaara.sort(() => Math.random() - 0.5);

            // Merkitään arvottu kenttä true
            samanAanimaara.forEach(e => e.arvottu = true);

            // Päivitetään alkuperäiseen listaan
            lista.splice(i, samanAanimaara.length, ...samanAanimaara);
            i += samanAanimaara.length - 1;
        }
    }

    return lista;
}