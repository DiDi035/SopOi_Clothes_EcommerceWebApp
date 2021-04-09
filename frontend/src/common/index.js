import DropdownMenuItem from "../Container/DropdownMenuItem/DropdownMenuItem";

export const AUTHEN_TOKEN = "auth-token";
export const PORT = "4000";
export const DOMAIN = "http://localhost:";
export const DATASET_URL = "https://api.jsonbin.io/b/601fd28f81c79e442992adc4";
export const categories = {
  Ladies: {
    Dresses: [
      "Rompers / Jumpsuits",
      "Casual dresses",
      "Going out dresses",
      "Party / Ocassion dresses",
      "Mini dresses",
      "Maxi / Midi dresses",
      "Sets",
    ],
  },
};

export const filters = ["Size", "Color", "Brand", "Price", "Available"];

export const SubMenuForLadies = ({ width }) => {
  return (
    <DropdownMenuItem width={width} haveIcon={false}>
      Dresses
    </DropdownMenuItem>
  );
};
