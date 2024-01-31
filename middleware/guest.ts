export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    if (isAuthenticated === true) {
        return navigateTo(config.public.homeUrl, { replace: true });
    }
});