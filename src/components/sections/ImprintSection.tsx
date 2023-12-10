import Container from '@/components/Container';

function ImprintSection() {
  return (
    <section
      className="relative z-1 flex min-h-screen py-8"
      aria-label="Imprint"
    >
      <Container>
        <h1 className="mb-12 font-display font-bold text-7xl">DEVELOP BY</h1>
        <h2 className="mb-4 font-display font-bold text-3xl">Details</h2>
        <p className="mb-12 text-neutrals-50/70">
          WEB DEVELOPMENT
          <br />
          Akash Kharde
        </p>
        <h2 className="mb-4 font-display font-bold text-3xl">Contact</h2>
        <p className="mb-12 text-neutrals-50/70">
          E-Mail:{' '}
          <a
            href="mailto:akashkharde111@gmail.com"
            title="Contact US"
            className="border-b-0.5 border-b-neutrals-50/70 text-neutrals-50/70 transition-colors duration-200 hover:border-transparent hover:text-neutrals-50"
          >
            akashkharde111@gmail.com
          </a>
          <br />
        </p>
        <h2 className="mb-4 font-display font-bold text-3xl">
          Content responsibility
        </h2>
        <a
          href="https://main--teal-gelato-5ac22c.netlify.app/"
          title="Get inspired by more great work"
          target="_blank"
          rel="noreferrer"
          className="border-b-0.5 border-b-neutrals-50/70 text-neutrals-50/70 transition-colors duration-200 hover:border-transparent hover:text-neutrals-50"
        >
          WEB DEVELOPMENT
        </a>
      </Container>
    </section>
  );
}

export default ImprintSection;
