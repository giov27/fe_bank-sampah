import { create } from 'zustand';

interface TokenState {
  token: string | null;
  setToken: (token: string | null) => void;
}

// interface UserState {
//   user: User | null;
//   setUser: (user: User | null) => void;
//   login: () => void;
// }

const useToken = create<TokenState>(set => ({
  token: null,
  setToken: token => {
    set({ token });
  }
}));

// const useUser = create<UserState>((set, get) => ({
//   user: null,
//   setUser: user => {
//     set({ user });
//   },
//   login: () => {
//     set(state => {
//       if (state.user) {
//       } else {
//         state.user = {
//           username: null,
//           email: null,
//           role: null
//         };
//       }
//       return state;
//     });
//   }
// }));

export { useToken };
