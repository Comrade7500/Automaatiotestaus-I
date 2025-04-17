export function tarkistaSalasana(salasana) {
    const tarpeeksiPitkä = salasana.length >= 10;
    const sisältääIsokirjaimen = /[A-Z]/.test(salasana);
    const sisältääPienenKirjaimen = /[a-z]/.test(salasana);
    const sisältääNumeron = /\d/.test(salasana);
    const sisältääErikoismerkin = /[!@#$%^&*(),.?":{}|<>]/.test(salasana);

    return tarpeeksiPitkä && sisältääIsokirjaimen && sisältääPienenKirjaimen && sisältääNumeron && sisältääErikoismerkin;
}