const { tarkistaSalasana } = require( '../TestaaSalasanaPieni');

describe('tarkistaSalasana', () => {
  it('hyväksyy kelvollisen salasanan', () => {
    expect(tarkistaSalasana('Valid123!@')).toBe(true);
  });

  it('hylkää liian lyhyen salasanan', () => {
    expect(tarkistaSalasana('Val1!')).toBe(false);
  });

  it('hylkää salasanan ilman isoa kirjainta', () => {
    expect(tarkistaSalasana('valid123!@')).toBe(false);
  });

  it('hylkää salasanan ilman pientä kirjainta', () => {
    expect(tarkistaSalasana('VALID123!@')).toBe(false);
  });

  it('hylkää salasanan ilman numeroa', () => {
    expect(tarkistaSalasana('ValidPassword!')).toBe(false);
  });

  it('hylkää salasanan ilman erikoismerkkiä', () => {
    expect(tarkistaSalasana('Valid12345')).toBe(false);
  });
});
