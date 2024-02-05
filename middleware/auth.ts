export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === false) {
        return navigateTo('/login', { replace: true });
    }
});