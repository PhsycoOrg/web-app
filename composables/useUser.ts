export const useUser = () => {
    const store = useUserStore();
    const user = store;
    
    return user;
};