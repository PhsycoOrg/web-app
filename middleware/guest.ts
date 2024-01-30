export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    console.log(isAuthenticated);

    if (isAuthenticated === true) {
        return navigateTo(config.public.homeUrl, { replace: true });
    }
});