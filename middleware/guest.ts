export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    console.log(isAuthenticated.value);

    if (isAuthenticated.value === true) {
        return navigateTo(config.public.homeUrl, { replace: true });
    }
});