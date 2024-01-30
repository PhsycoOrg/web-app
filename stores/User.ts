import { defineStore } from 'pinia'
import type User from '~/api/models/User'
import type { ProfileInformation } from '~/interfaces/User/ProfileInterface';

export const useUserStore = defineStore('UserStore', {
    persist: true,
    state: (): User => ({
        id: undefined,
        name: '',
        email: undefined,
        email_verified_at: undefined,
    }),
    getters: {
        isAuthenticated: (state: User): boolean => state.email !== undefined,
        getProfileInformation: (state: User) => {
            const data: ProfileInformation = {
                email: state.email ?? '',
                name: state.name,
                emailVerified: state.email_verified_at != undefined
            }; 

            return data;
        }
    },
    actions: {
        setUserData (data: User): void {
            this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.email_verified_at = data.email_verified_at;
        },
        logout (): void {
            this.id = undefined;
            this.name = '';
            this.email = undefined;
            this.email_verified_at = undefined;
        },
    }
})