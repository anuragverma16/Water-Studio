type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = 'brand-logo' }: BrandLogoProps) {
  return <img src="/logo.png" alt="Paban Studio" className={className} />;
}
