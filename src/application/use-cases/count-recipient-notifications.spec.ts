import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notificiations-repositories';
import { CancelNotification } from './cancel-notification';

describe('Count recipients notifications', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const cancelNotification = new CancelNotification(notificationsRepository);

    const notificiation = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(notificiation);

    await cancelNotification.execute({
      notificationId: notificiation.id,
    });

    expect(notificationsRepository.notifications[0].cancelledAt).toEqual(
      expect.any(Date),
    );
  });
});
