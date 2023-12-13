import weatherworksLogoImage from '@/assets/images/logos/weatherworks.png';
import Container from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';


function Header() {

  return (
    <header className="w-full py-3">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            title="Go back home"
          >
            <Image
              src={weatherworksLogoImage}
              alt="WeatherWorks"
              className="h-14 w-14 lg:h-16 lg:w-16"
            />
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;
