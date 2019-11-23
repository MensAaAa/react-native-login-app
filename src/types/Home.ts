export interface HomeProps {
  token: string;
  logout: () => void;
  isFetching: boolean;
}