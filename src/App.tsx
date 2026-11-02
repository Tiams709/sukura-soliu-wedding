import { useEffect, useState } from "react";

export default function App() {
  const [opened, setOpened] = useState(false);
  // const [musicOn, setMusicOn] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // const [form, setForm] = useState({
  //   name: "",
  //   phone: "",
  //   guests: "1",
  //   attendance: "yes",
  //   message: "",
  // });

  // const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date("2026-12-26T10:00:00").getTime();
      const difference = Math.max(0, target - Date.now());

      setTimeLeft({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  // const handleRSVP = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   // Connect this form to a backend or form service
  //   // to save guest responses.
  //   setSubmitted(true);
  // };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-slate-800">
      {/* SECTION 1: FULL-SCREEN ENVELOPE */}
      {!opened ? (
        <div className="fixed inset-0 w-full h-screen h-dvh overflow-hidden flex items-center justify-center">
          <img
            src="/capri-envelope.png.jpeg"
            alt="Capri-blue wedding envelope with S & S wax seal"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />

          <button
            type="button"
            onClick={() => setOpened(true)}
            aria-label="Open wedding invitation"
            className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%] aspect-square rounded-full bg-transparent border-0 cursor-pointer"
          />
        </div>
      ) : (
        <>
          {/* Animated envelope transition */}
          <div
            className="envelope-reveal fixed inset-0 z-50
            flex items-center justify-center bg-white"
          >
            <img
              src="/capri-envelope.png.jpeg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

        {/* SECTION 2: INVITATION */}
<section
  id="invitation"
  className="relative min-h-screen w-full overflow-hidden"
  style={{
    backgroundImage: "url('/wedding-bg.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Background overlay */}
  {/* <div className="absolute inset-0 bg-white/40" /> */}

  {/* RSVP Button - Top Right */}
  <div className="relative z-20 flex justify-end px-6 py-6 sm:px-12">
   <a
  href="https://forms.gle/Ph9gFczWmUiuBV2s7"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-[#176B87] px-8 py-3 text-sm tracking-widest text-white transition hover:bg-[#12556C]"
>
  RSVP
</a>
  </div>

  {/* Invitation Content */}
  <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">

    <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#176B87]">
      Together with our families
    </p>

    <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#176B87]">
      Wedding Invitation
    </p>

    <h1 className="font-serif text-4xl leading-tight text-[#176B87] sm:text-6xl">
      Sukura Lassissi
    </h1>

    <p className="my-5 font-serif text-3xl italic text-[#176B87]">
      &
    </p>

    <h2 className="font-serif text-4xl leading-tight text-[#176B87] sm:text-6xl">
      Soliu Adewale
    </h2>

    <p className="mt-8 font-serif text-sm italic text-[#176B87]">
      We would be delighted to celebrate our love with you.
    </p>

  </div>
</section>

          {/* SECTION 3: VENUE */}
          {/* SECTION 3: WEDDING VENUE */}
<section
  id="venue"
  className="bg-[#FDF9F8] px-5 py-16 text-center"
>
  <p className="text-xs uppercase tracking-[0.35em] text-[#176B87]">
    Join Us
  </p>

  <h2 className="mt-4 font-serif text-4xl text-[#176B87]">
    Wedding Venue
  </h2>

  <div className="mt-10">
    <h3 className="font-serif text-2xl text-[#176B87]">
      Harmony Garden
    </h3>

    <p className="mt-3 text-sm text-[#176B87]">
      Gedu Estate, Shaki
    </p>
  </div>

  {/* LIVE GOOGLE MAP */}
  <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-[#176B87] shadow-md">

    <iframe
      title="Harmony Garden Wedding Venue Map"
      src="https://www.google.com/maps?q=Harmony%20Garden%2C%20Gedu%20Estate%2C%20Shaki&output=embed"
      width="100%"
      height="400"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />

  </div>

  {/* GET DIRECTIONS LINK */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Harmony%20Garden%2C%20Gedu%20Estate%2C%20Shaki"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-7 inline-flex items-center gap-2
      text-sm font-medium tracking-widest text-[#176B87]
      underline underline-offset-4"
  >
    OPEN DIRECTIONS IN GOOGLE MAPS ↗
  </a>

</section>

       {/* SECTION 4: COUNTDOWN */}
<section
  id="countdown"
  className="min-h-screen bg-[#F1F9FC] px-5 py-8 text-center"
>
  


  {/* Countdown Heading */}
  <div className="mx-auto max-w-3xl pt-16 sm:pt-24">
    <h2 className="font-serif text-4xl italic text-[#176B87] sm:text-6xl">
      Counting Down
    </h2>

    <p className="mt-3 text-xs tracking-[0.4em] text-[#176B87]">
      THE BIG DAY
    </p>

    {/* Decorative Divider */}
    <div className="my-12 flex items-center justify-center gap-4">
      <span className="h-px w-12 bg-[#176B87]" />
      <span className="text-xl text-[#176B87]">✦</span>
      <span className="h-px w-12 bg-[#176B87]" />
    </div>

    {/* Existing Live Countdown */}
    <div className="mx-auto grid max-w-2xl grid-cols-4 gap-2 sm:gap-8">
      {[
        ["DAYS", timeLeft.days],
        ["HOURS", timeLeft.hours],
        ["MINUTES", timeLeft.minutes],
        ["SECONDS", timeLeft.seconds],
      ].map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <p className="font-serif text-3xl text-[#176B87] sm:text-6xl">
            {String(value).padStart(2, "0")}
          </p>

          <p className="mt-3 text-[9px] tracking-[0.2em]
            text-slate-500 sm:text-xs">
            {label}
          </p>
        </div>
      ))}
    </div>

    {/* Couple Details */}
    <div className="mt-20">
      <p className="font-serif text-2xl italic text-[#176B87]">
        Sukura & Soliu
      </p>

      <p className="mt-3 text-xs tracking-[0.25em] text-[#176B87]">
        DECEMBER 26, 2026
      </p>
    </div>
  </div>
</section>

{/* RSVP FORM SECTION */}
<section
  id="rsvp"
  className="bg-white px-5 py-20 text-center"
>
  <p className="text-xs uppercase tracking-[0.3em] text-[#176B87]">
    Kindly respond
  </p>

  <h2 className="mt-3 font-serif text-4xl text-[#176B87]">
    RSVP
  </h2>

  <p className="mx-auto mt-4 max-w-md text-sm text-[#176B87]">
    We would love to celebrate this special day with you.
    Kindly confirm your attendance.
  </p>

  <a
    href="https://forms.gle/Ph9gFczWmUiuBV2s7"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block bg-[#176B87] px-10 py-4
      text-sm tracking-widest text-white transition
      hover:bg-[#12536A]"
  >
    CONFIRM ATTENDANCE
  </a>
</section>

          <footer className="bg-[#176B87] px-5 py-8 text-center text-white">
            <p className="font-serif text-2xl italic">Sukura & Soliu</p>
            <p className="mt-2 text-xs tracking-widest">DECEMBER 26, 2026</p>
          </footer>
        </>
      )}

      <style>{`
        .envelope-reveal {
          animation: envelopeFade 1.1s ease forwards;
          pointer-events: none;
        }

        @keyframes envelopeFade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          65% {
            opacity: 1;
            transform: scale(1.04);
          }
          100% {
            opacity: 0;
            transform: scale(1.08);
            visibility: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .envelope-reveal {
            animation-duration: 0.1s;
          }
        }
      `}</style>
    </main>
  );
}
