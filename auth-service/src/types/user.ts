export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  password: string;
  username: string;
  dateOfBirth: Date;
  createdAt?: Date;
  updatedAt?: Date;
}