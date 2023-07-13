export interface HomeState {
  user: {
    email: string;
    name: string;
    identification: string;
    phone: string;
    address: string;
    image: string;
  };
};

export const initialState: HomeState = {
  user: {
    email: '',
    name: '',
    identification: '',
    phone: '',
    address: '',
    image: ''
  }
};
➜
