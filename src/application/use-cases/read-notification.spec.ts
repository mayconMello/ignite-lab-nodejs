import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notificiations-repositories';
import { NotificationNotFound } from './errors/notification-not-found';
import { ReadNotification } from './read-notification';

describe('Read Notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const readNotification = new ReadNotification(notificationsRepository);

    const notificiation = makeNotification();

    await notificationsRepository.create(notificiation);

    await readNotification.execute({
      notificationId: notificiation.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
