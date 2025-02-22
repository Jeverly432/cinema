declare module "*.scss" {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames
}

declare module "*.png"
declare module "*.jpeg"
declare module "*.jpg"
declare module "*.webp"

declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";

    const content: React.FC<SvgProps>;
    export default content;
  }

declare const __IS_DEV__: boolean;
