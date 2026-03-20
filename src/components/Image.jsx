import React from 'react';

/**
 * next/image互換機能を提供するVite用の汎用Imageコンポーネント
 * 
 * ビルド時に vite-plugin-image-optimizer によって圧縮・最適化される想定です。
 * 遅延読み込み (loading="lazy") と非同期デコード (decoding="async") を自動で付与しつつ、
 * 既存の<img>タグと同様の使い方を提供します。
 */
const Image = ({
  src,
  alt = '', // アクセシビリティのためにデフォルトを空文字に
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
};

export default Image;
