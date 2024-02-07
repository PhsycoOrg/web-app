export interface ProfessionalData {
    title_specializations: string;
    license_number: number | null;
    specialization: string | null,
    categories: Category[]
}

export interface Category {
    id: number,
    name: string
}