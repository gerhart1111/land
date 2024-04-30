import { addQueueToast } from './toastSlice';

export function showSuccessToast(message: string) {
  return addQueueToast({ message, type: 'success' });
}

export function showErrorToast(message: string, action?: string) {
  return addQueueToast({ message, type: 'error', action });
}
