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
        role: undefined,
        profile_photo_url: undefined,
        has_profile_photo: false,
    }),
    getters: {
        isAuthenticated: (state: User): boolean => state.email !== undefined,
        getRole: (state: User): string => state.role??'user',
        getProfileInformation: (state: User) => {
            const data: ProfileInformation = {
                email: state.email ?? '',
                name: state.name,
                emailVerified: state.email_verified_at != undefined,
                photo: state.profile_photo_url ?? '',
                has_profile_photo: state.has_profile_photo,
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
            this.profile_photo_url = data.profile_photo_url;
            this.role = data.role;
            this.has_profile_photo = data.has_profile_photo;
        },
        logout (): void {
            this.id = undefined;
            this.name = '';
            this.email = undefined;
            this.email_verified_at = undefined;
            this.profile_photo_url = undefined;
            this.role = undefined;
        },
    }
})