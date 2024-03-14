import { dispatchNotification } from '@/components/Notification';
import type { NotificationType } from '@/components/Notification/interfaces/Notification.interface';

export const useNotification = () => {
  const add = (
    title: string,
    content: string,
    type: NotificationType,
    autoClose = true,
    duration = 3000,
  ) => {
    dispatchNotification({ title, content, type, autoClose, duration });
  }
  return {add};
}
