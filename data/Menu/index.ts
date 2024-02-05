import adminMenu from './adminMenu';
import userMenu from './userMenu';
import psychoMenu from './psychoMenu';

export const menus = {
  admin: adminMenu,
  user: userMenu,
  psycho: psychoMenu,
} as const;