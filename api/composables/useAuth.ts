export const useAuth = () => {
  const router = useRouter();
  const config = useRuntimeConfig();
  const { authentication } = useApi();
  const user = useUser();

  const isAuthenticated = computed(() => user.isAuthenticated).value;

  async function fetchUser(): Promise<any> {
    const userData = await authentication.user(); // Llamada asíncrona para obtener datos del usuario
    user.setUserData(userData); // Almacenar datos en el store
  }

  async function login(
      email: string,
      password: string,
      remember = true
  ): Promise<any> {
      if (isAuthenticated === true) {
          return;
      }

      await authentication.login(email, password, remember);
      await fetchUser();

      await router.push(config.public.homeUrl);
  }

  async function register(
      name: string,
      email: string,
      password: string,
      password_confirmation: string
  ): Promise<any> {
      await authentication.register(
          name,
          email,
          password,
          password_confirmation
      );
      await fetchUser();

      await router.push(config.public.homeUrl);
  }

  async function logout(): Promise<any> {
      if (isAuthenticated === false) {
          return;
      }

      await authentication.logout();
      user.logout();

      await router.push(config.public.loginUrl);
  }

  return {
      user,
      isAuthenticated,
      login,
      register,
      logout,
  };
};