import { LOGIN_USER, TOKEN_KEY } from '@/config/service.config';
import { post } from '@/helpers/api-service';

const getToken = () => localStorage.getItem(TOKEN_KEY);

const login = async (loginData: Login) => {
  return new Promise<LoginResponse>((resolve, reject) => {
    post(LOGIN_USER, loginData)
      .then(res => {
        localStorage.setItem(TOKEN_KEY, res.data.data.token);
        resolve(res.data);
      })
      .catch(err => {
        console.error(err);
        reject(err.response.data);
      });
  });

  // console.log(data.token);
  // localStorage.setItem('TOKEN_BS', data.token);
  // toast.success(message);
  // router.push('/');
  // } catch (e) {
  //   toast.warning("Error!");
  //   console.warn(e)
  // }
};

const authService = {
  getToken,
  login
};

export default authService;
