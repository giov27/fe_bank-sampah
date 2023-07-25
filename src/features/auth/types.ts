interface IResponse {
  status: number;
  message: string;
  data: any;
}

interface LoginResponse extends IResponse {
  data: {
    token: string;
  };
}

interface Login {
  username: string;
  password: string;
}
