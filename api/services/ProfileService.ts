import { ApiServiceBase } from "~/api/services/ApiServiceBase";

export default class ProfileService extends ApiServiceBase {
    async updateProfile(data: FormData): Promise<any> {
        return await this.call("/api/v1/user/update-profile", {
            method: "post",
            body: data,
        });
    }

    async deleteProfilePhoto(): Promise<any> {
        return await this.call("/api/v1/user/delete-profile-photo", {
            method: "post"
        });
    }

    async updatePassword(password: string, new_password: string, new_password_confirmation: string): Promise<any> {
        return await this.call("/api/v1/user/change-password", {
            method: "put",
            body: {password, new_password, new_password_confirmation},
        });
    }
}