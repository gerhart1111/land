import React from 'react';
import LazyLoad from 'react-lazyload';

interface ImageProps extends React.ImgHTMLAttributes<HTMLElement> {
  /**
   * LazyLoad component props: https://github.com/twobin/react-lazyload
   */
  lazyLoadProps?: any;
  alt?: string;
}

export default function Img(props:ImageProps) {
  const { lazyLoadProps, ...restProps } = props;
  return (
    <LazyLoad once offset={250} {...lazyLoadProps}>
      <img {...restProps} />
    </LazyLoad>
  );
};


