import { UserInterface } from "./User";

export interface LoginInterface {
  username: string;
  password: string;
}

export interface LoginProps {
  signIn: (loginData: LoginInterface) => void;
  isFetching: boolean;
  errorMessage?: string;
  resetErrors?: () => void;
}