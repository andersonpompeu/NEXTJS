import arnoLogo from '@/assets/brands/arno.png';
import brastempLogo from '@/assets/brands/brastemp.png';
import britaniaLogo from '@/assets/brands/britania.png';
import cadenceLogo from '@/assets/brands/cadence.png';
import consulLogo from '@/assets/brands/consul.png';
import electroluxLogo from '@/assets/brands/electrolux.png';
import lgLogo from '@/assets/brands/lg.png';
import mideaLogo from '@/assets/brands/midea.png';
import mondialLogo from '@/assets/brands/mondial.png';

interface BrandLogosProps {
  brands: { name: string }[];
  city?: string;
}

const brandLogoMap: Record<string, string> = {
  'Arno': arnoLogo,
  'Brastemp': brastempLogo,
  'Britânia': britaniaLogo,
  'Cadence': cadenceLogo,
  'Consul': consulLogo,
  'Electrolux': electroluxLogo,
  'LG': lgLogo,
  'Midea': mideaLogo,
  'Mondial': mondialLogo,
};

const BrandLogos = ({ brands, city }: BrandLogosProps) => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-custom">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-8 md:mb-10">
          Marcas que Atendemos{city ? ` em ${city}` : ''}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 max-w-4xl mx-auto">
          {brands.map((brand) => {
            const logo = brandLogoMap[brand.name];
            return (
              <div
                key={brand.name}
                className="bg-card rounded-xl p-3 md:p-5 shadow-sm border border-border flex flex-col items-center justify-center gap-2 hover:shadow-md hover:border-primary/20 transition-all"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={`Assistência técnica ${brand.name} - conserto autorizado ${brand.name}${city ? ` em ${city}` : ''}`}
                    title={`Conserto de ${brand.name}${city ? ` em ${city}` : ''}`}
                    className="w-16 h-8 md:w-20 md:h-10 object-contain"
                    loading="lazy"
                    width={80}
                    height={40}
                  />
                ) : (
                  <span className="text-xs md:text-sm font-bold text-foreground text-center leading-tight">
                    {brand.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
