export interface Login {
    email: string;
    password: string;
    remember: boolean;
}

export interface LoginErrors {
    message: string;
    errors?: {
        email?: string[];
        password?: string[];
    };
}

export interface ResetPassword {
    email: string;
    password: string;
    password_confirmation: string;
    token: string
}

export interface Register {
    email: string;
    password: string;
    password_confirmation: string;
    name: string
}

export interface AuthErrors {
    name?: [];
    email?: [];
    password?: [];
    new_password?: [];
}

export interface ProfileErrors {
    name?: [];
    email?: [];
    photo?: [];
}