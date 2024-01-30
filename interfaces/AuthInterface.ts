export interface Login {
    email: string;
    password: string;
}

export interface LoginErrors {
    message: string;
    errors?: {
        email?: string[];
        password?: string[];
    };
}