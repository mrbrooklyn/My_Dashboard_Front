import { HomeContactState } from "~/enums";

export interface IContactType {
  type: HomeContactState;
  display: string;
  value: string;
  image: string;
}
