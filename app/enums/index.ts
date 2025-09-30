export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum BannerType {
  FirstBanner = "home",
  SecondBanner = "playground",
  ThirdBanner = "contact",
}

export enum BannerName {
  FirstBanner = "first_banner_name", //i18n key
  SecondBanner = "second_banner_name", //i18n key
  ThirdBanner = "third_banner_name", //i18n key
}

export enum BannerIndicatorState {
  Past,
  Active,
  Coming,
}

export enum HomeContactState {
  Text,
  Link,
}

export enum AuthContainerType {
  Login = "Login",
  Register = "Register",
}
