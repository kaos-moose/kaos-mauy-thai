export default function IntroSection() {
  return (
    <section className="bg-neutral-950 py-24 px-6">
      <div className="max-w-[1080px] mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Helena, Montana
          </p>

          <h2
            className="text-4xl md:text-5xl text-white uppercase mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Train With Purpose
          </h2>

          <div className="w-14 h-[3px] bg-red-600 mx-auto mb-10" />

          <p className="text-neutral-300 text-xl leading-relaxed mb-6">
            KAOSMT is not a traditional fitness gym.
          </p>

          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Every class is coach-led, structured, and designed to improve your
            conditioning, confidence, awareness, and ability to perform under
            pressure.
          </p>

          <p className="text-neutral-400 text-lg leading-relaxed">
            You will train with real people, learn practical skills, and become
            part of a community built around effort, discipline, and
            accountability.
          </p>
        </div>
      </div>
    </section>
  );
}
