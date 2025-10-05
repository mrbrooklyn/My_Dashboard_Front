export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum BannerType {
  FIRST_BANNER = "home",
  SECOND_BANNER = "playground",
  THIRD_BANNER = "contact",
}

export enum BannerName {
  FIRST_BANNER = "first_banner_name", //i18n key
  SECOND_BANNER = "second_banner_name", //i18n key
  THIRD_BANNER = "third_banner_name", //i18n key
}

export enum BannerIndicatorState {
  PAST,
  ACTIVE,
  COMING,
}

export enum HomeContactState {
  TEXT,
  LINK,
}

export enum AuthContainerType {
  LOGIN = "Login",
  REGISTER = "Register",
}

export enum CarouselState {
  PREV = "prev",
  ACTIVE = "active",
  NEXT = "next",
  HIDDEN = "hidden",
}