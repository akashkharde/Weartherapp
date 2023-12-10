import Background from '@/components/Background';
import Layout from '@/components/layouts/Layout';
import FavouritesSection from '@/components/sections/FavouritesSection';
import GeolocationSection from '@/components/sections/GeolocationSection';

function Home() {
  return (
    <Layout title="WeatherWorks | The most visually compelling real-time weather app">
      <Background src="/images/waves/background1.svg" />
      <GeolocationSection />
      <FavouritesSection />
    </Layout>
  );
}

export default Home;
