export interface User {
  id: string;
  email: string;
  fullName?: string;
  isActive?: boolean;
  password?: string;
  token: string;
  roles?: string[];
}
