export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User extends UserProps {
  id: number;
  description?: string;
  old?: number;
  class?: string;
}
