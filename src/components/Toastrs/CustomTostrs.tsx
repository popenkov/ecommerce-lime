import { toast } from "react-toastify";
import { ReactComponent as CheckIcon } from "@src/assets/icons/check-green.svg";
import { ReactComponent as FavoritesIcon } from "@src/assets/icons/favorites.svg";
import { ReactComponent as FavoritesActiveIcon } from "@src/assets/icons/favorites-active.svg";

export const handleSuccesCartToastr = (text: string) => {
  return toast.success(text, {
    icon: () => <CheckIcon />,
  });
};

export const handleSuccesFavoritesToastr = (text: string) => {
  return toast.success(text, {
    icon: () => <FavoritesActiveIcon />,
  });
};
export const handleRemoveFavoritesToastr = (text: string) => {
  return toast.success(text, {
    icon: () => <FavoritesIcon />,
  });
};
