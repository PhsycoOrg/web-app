import type { Category, ProfessionalData } from "~/interfaces/Psycho/ProfessionalData";
import type Application from "../models/Application";
import { ApiServiceBase } from "./ApiServiceBase";

export default class ApplicationService extends ApiServiceBase {
    async info(): Promise<Application> {
        return await this.call<Application>("/");
    }

    async getCategories(): Promise<Category[]> {
        return await this.call<Category[]>("/api/v1/get-categories");
    }

    async getProfessionalProfileData(): Promise<ProfessionalData> {
        return await this.call<ProfessionalData>("/api/v1/user/get-professional-profile", {
            method: 'post'
        });
    }

    async updateProfessionalProfileData(title_specializations: string, license_number: number, specialization: string, categories: number[]): Promise<ProfessionalData> {
        return await this.call<ProfessionalData>("/api/v1/user/update-professional-profile", {
            method: 'post',
            body: { title_specializations, license_number, specialization, categories },
        });
    }
}