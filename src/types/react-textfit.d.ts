declare module "react-textfit" {
  import * as React from "react";

  export interface TextfitProps extends React.HTMLAttributes<HTMLElement> {
    mode?: "single" | "multi";
    forceSingleModeWidth?: boolean;
    min?: number;
    max?: number;
    throttle?: number;
    onReady?: (fontSize: number) => void;
  }

  export const Textfit: React.FC<TextfitProps>;
}