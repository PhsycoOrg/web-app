import type User from "../../interfaces/User/User";

export const useUser = () => {
    const store = useUserStore();
    const user = store;
    
    return user;
};