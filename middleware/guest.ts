export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === true) {
        return navigateTo('/dashboard', { replace: true });
    }
});