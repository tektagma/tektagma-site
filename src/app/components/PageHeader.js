export default function PageHeader({ eyebrow, title, subhead }) {
  return (
    <section className="bg-navy px-6 pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-amber uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subhead ? (
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            {subhead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
