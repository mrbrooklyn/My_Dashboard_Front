import { HomeContactState } from "~/enums/enum";

export interface IContactType {
  type: HomeContactState;
  display: string;
  value: string;
  image: string;
}
