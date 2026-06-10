export default function CharterWhySection() {
  return (
    <section className="bg-neutral-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-5xl text-white uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Founders Closed.
            <br />
            <span className="text-red-600">Charter Is Your Window.</span>
          </h2>
          <div className="w-14 h-[3px] bg-red-600 mx-auto" />
        </div>

        <div className="space-y-6 text-neutral-300 text-base md:text-lg">
          <p>
            The Founders program is officially closed. But before we open to the public,
            we&apos;re offering one final membership tier for people who want to get in early.
          </p>
          <p>
            Charter Members get discounted pre-opening pricing, access to preview classes,
            and early schedule placement — for a limited time only.
          </p>
          <p className="text-white font-semibold text-xl md:text-2xl border-l-4 border-red-600 pl-5">
            Charter Members train before opening day.
            <br />
            Be there from the start.
          </p>
        </div>
      </div>
    </section>
  );
}
