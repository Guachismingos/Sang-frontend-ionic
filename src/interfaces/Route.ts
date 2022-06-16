import { FC } from "react";

export interface Route {
  path: string;
  Component: FC<{}>;
  name: string;
  childs: Route[];
  icon_img?: string;
}
