import { Method } from "./method";

//export type: export kiểu dữ liệu đối tượng
export type User = {
    id: number;
    name: string;
    avatar: string;
    email: string;
    email_verified_at?: string;
}

export type UpdateProfileSchema= {
    _method: Method
    name: string;
    email: string;
    avatar: File | null;
};

export type UpdatePasswordSchema ={
    current_password: string;
    password: string;
    password_confirmation: string;
};
export type ResetPasswordSchema = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export type LoginSchema = {
    email: string;
    password: string;
    remember: boolean;
}

export type RegisterUserSchema ={
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}