import { useAppSelector } from "./useAppSelector";

// если пользователь неавторизован - вернется null
export const useAuth = () => useAppSelector((state) => state.user);
