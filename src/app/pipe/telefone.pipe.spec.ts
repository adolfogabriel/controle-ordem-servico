import { TelefonePipe } from '../pipe/telefone.pipe';

describe('TelefonePipe', () => {
  it('create an instance', () => {
    const pipe = new TelefonePipe();
    expect(pipe).toBeTruthy();
  });
});
