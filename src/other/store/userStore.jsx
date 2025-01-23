import create from "zustand";

 export const useUserStore = create ((set) =>({
    user: {
        name: '',
        email: '',
        avatar: '',
    },
      setUser: (user) => set({})
}))
