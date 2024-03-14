import type { Status } from "@/interfaces/Status";
import apiAxios from "@/services/api";

export const useApi = () => {
  async function passwordForgot(email: string): Promise<any> {
    return await apiAxios.post("/forgot-password", { email });
  }

  async function passwordReset(token: string, email: string, password: string, password_confirmation: string): Promise<any> {
    return await apiAxios.post("/reset-password", { email, token, password, password_confirmation });
  }

  async function emailSendVerification(): Promise<any> {
    return await apiAxios.post("/email/verification-notification");
  }

  async function updateProfile(data: FormData): Promise<any> {
    return await apiAxios.post("/user/update-profile", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  async function deleteProfilePhoto(): Promise<any> {
    return await apiAxios.post("/user/delete-profile-photo");
  }

  async function updatePassword(password: string, new_password: string, new_password_confirmation: string): Promise<any> {
    return await apiAxios.put("/user/change-password", {password, new_password, new_password_confirmation});
  }

  return {
    passwordForgot,
    passwordReset,
    emailSendVerification,
    updateProfile,
    deleteProfilePhoto,
    updatePassword
  }
}
