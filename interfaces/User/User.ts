export default interface User {
    id?: string;
    token?: string,
    name: string;
    email?: string;
    email_verified_at?: Date;
    profile_photo_url?: string;
    has_profile_photo: boolean;
    role?: string;
}