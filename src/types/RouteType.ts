import { FC } from "react";

interface Meta {
  title: string;
}

export default interface RouteType {
  path: string;
  meta: Meta;
  component: FC<{ title: string }>; // 혹은 () => JSX.Element | null
}
