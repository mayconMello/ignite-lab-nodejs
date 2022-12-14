import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    expect(
      () => new Content('Você recebeu uma solicitação de amizade'),
    ).toBeTruthy();
  });

  it('should not be able to create a notificiation content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notificiation content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
