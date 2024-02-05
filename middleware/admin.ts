export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useUser();
    const { logout } = useAuth();

    if (user.getRole !== 'admin') {
        await logout();
    }
})
