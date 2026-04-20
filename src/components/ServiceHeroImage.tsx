import heroMaquinaDeLavar from '@/assets/hero-maquina-de-lavar.jpg';
import heroGeladeira from '@/assets/hero-geladeira.jpg';
import heroMicroOndas from '@/assets/hero-micro-ondas.jpg';
import heroSmartTv from '@/assets/hero-smart-tv.jpg';
import heroCelular from '@/assets/hero-celular.jpg';

interface ServiceHeroImageProps {
  serviceSlug: string;
  altText?: string;
}

const imageMap: Record<string, string> = {
  'conserto-maquina-de-lavar-maringa': heroMaquinaDeLavar,
  'conserto-geladeira-maringa': heroGeladeira,
  'conserto-micro-ondas-maringa': heroMicroOndas,
  'conserto-smart-tv-maringa': heroSmartTv,
  'conserto-celular-maringa': heroCelular,
};

const ServiceHeroImage = ({ serviceSlug, altText = 'Técnico realizando conserto' }: ServiceHeroImageProps) => {
  const imageSrc = imageMap[serviceSlug] || heroMaquinaDeLavar;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
      <img
        src={imageSrc}
        alt={altText}
        className="relative w-full rounded-2xl shadow-2xl border border-border object-cover aspect-square"
        loading="lazy"
        width={1024}
        height={1024}
      />
    </div>
  );
};

export default ServiceHeroImage;
