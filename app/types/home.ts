import { HomeContactState } from "~/enums";

export interface IContactType {
  type: HomeContactState;
  display: string;
  value: string;
  image: string;
}

export interface ISkillCategoryType {
  id: number;
  value: string;
}

export interface ISkillType {
  category: number;
  name: string;
  level: string;
  icon: string;
}
