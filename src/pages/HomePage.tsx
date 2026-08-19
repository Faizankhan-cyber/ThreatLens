import { Scanner } from '@/components/Scanner';

export function HomePage() {
  return (
    <div className="bg-ink-950">
      {/* HERO — left aligned, editorial serif headline */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-28 sm:pb-12">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
          Digital Threat Detection
        </span>

        {/* Headline — two lines, large editorial serif */}
        <h1
          className="mt-6 font-serif font-medium tracking-tight text-slate-100 leading-[1.05]"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
        >
          <span className="block">
            Is that link <em className="italic text-brand font-medium">safe</em> — or a
          </span>
          <span className="relative inline-block mt-1">
            <span className="text-slate-400">trap?</span>
            {/* Red horizontal strike-through crossing through "trap?" */}
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-1/2 h-[0.12em] -translate-y-1/2 bg-red-500 rounded-full"
              style={{ transform: 'translateY(-50%) rotate(-1.5deg)' }}
            />
          </span>
        </h1>

        <p className="mt-7 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
          Analyze suspicious links, messages and digital content before you interact with them.
        </p>
      </section>

      {/* SCANNER — directly below hero description */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <Scanner />
      </section>
    </div>
  );
}
