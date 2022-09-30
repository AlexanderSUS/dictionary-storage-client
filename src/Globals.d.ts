declare module '*.module.css' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module '*.module.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
