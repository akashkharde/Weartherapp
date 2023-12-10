import weatherworksLogoImage from '@/assets/images/logos/weatherworks.png';
import Container from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { IoMailUnreadSharp } from 'react-icons/io5';


function Header() {

  const socials = [
    {
      position: 0,
      title: 'View GitHub profile',
      icon: <IoMailUnreadSharp />,
      link: 'https://www.google.com/',
    },
    {
      position: 1,
      title: 'Join Discord server',
      icon: <IoMailUnreadSharp />,
      link: 'https://www.google.com/',
    },
    {
      position: 2,
      title: 'View source code',
      icon: <IoMailUnreadSharp />,
      link: 'https://www.google.com/',
    },
  ];
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
          <div className="flex gap-x-2">
            {socials.map((social) => (
              <a
                key={social.position}
                href={social.link}
                rel="noreferrer"
                target="_blank"
                title={social.title}
                className="text-neutrals-50/70 transition-colors duration-200 focus-visible:text-neutrals-50 hover:text-neutrals-50"
              >
                <div className="h-10 w-10">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
