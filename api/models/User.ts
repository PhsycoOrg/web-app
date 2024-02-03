export default interface User {
    name: string;
    id?: string;
    email?: string;
    email_verified_at?: Date;
    profile_photo_url?: string;
    has_profile_photo: boolean;
    role?: string;
}