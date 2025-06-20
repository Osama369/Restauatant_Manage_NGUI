import { Role } from "./role";

export interface User {
  name: string;
  userEmail: string;
  phone: string;
  password: string;
  role: Role; // Can be 'Admin' or 'Staff'
}
