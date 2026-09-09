export type StoreMapShop = {
  name: string;
  address: string;
};

type StoreMapProps = {
  shop: StoreMapShop;
};

/**
 * A keyless Google Maps embed keeps the selected-store map available both in
 * the Manus preview and on the public GitHub Pages deployment.
 */
export function StoreMap({ shop }: StoreMapProps) {
  const location = encodeURIComponent(`${shop.name} ${shop.address}`);
  const source = `https://www.google.com/maps?q=${location}&output=embed`;

  return (
    <div className="store-map-frame" aria-label={`${shop.name}のGoogleマップ`}>
      <iframe
        className="store-map-canvas"
        src={source}
        title={`${shop.name}のGoogleマップ`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
