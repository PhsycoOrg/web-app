import apiAxios from "@/services/api";
export const useAuth = () => {
    const router = useRouter();
    const config = useRuntimeConfig();
    const user = useUser();

    const isAuthenticated = user.isAuthenticated;

    async function fetchUser(): Promise<any> {
        const userData = await apiAxios.get("/user");
        user.setUserData(userData.data);
    }

    async function login(email: string, password: string, remember = true): Promise<any> {
        if (isAuthenticated === true) {
            return;
        }
        const token = await apiAxios.post("/login", { email, password, remember });
        user.setToken(token.data.token);

        await fetchUser();
    }

    async function register(
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    ): Promise<any> {
        const token = await apiAxios.post("/register",{
            name,
            email,
            password,
            password_confirmation
        });
        user.setToken(token.data.token);
        await fetchUser();

        await router.push(config.public.homeUrl);
    }

    async function logout(): Promise<any> {
        if (isAuthenticated === false) {
            return;
        }

        await apiAxios.post("/logout");
        user.logout();

        await router.push(config.public.loginUrl);
    }

    return {
        user,
        isAuthenticated,
        fetchUser,
        login,
        register,
        logout,
    };
};