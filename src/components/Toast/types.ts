export interface IToast {
  message: string;
  type: 'success' | 'error';
  action?: string;
  persistOnLocationChange?: boolean;
}
