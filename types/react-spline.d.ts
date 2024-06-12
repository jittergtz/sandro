// types/react-spline.d.ts
declare module '@splinetool/react-spline' {
    import * as React from 'react';
  
    export interface SplineProps {
      scene: string;
      onLoad?: () => void;
      onError?: (error: Error) => void;
      onResize?: () => void;
      onHover?: (event: any) => void;
      onMouseDown?: (event: any) => void;
      onMouseUp?: (event: any) => void;
      onTouchStart?: (event: any) => void;
      onTouchEnd?: (event: any) => void;
      onWheel?: (event: any) => void;
    }
  
    const Spline: React.FC<SplineProps>;
    export default Spline;
  }
  