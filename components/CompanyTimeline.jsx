export default function CompanyTimeline() {
  const timelineData = [
    {
      year: "2014",
      description:
        "After Vishal Garg’s first attempt to purchase his own home, he quickly realized that the borrowing process was unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
    },
    {
      year: "2015",
      description:
        "Better Mortgage funds its first mortgage loan entirely online (without a single phone call).",
    },
    {
      year: "2016",
      description:
        "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
    },
    {
      year: "2017",
      description:
        "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: "2018",
      description:
        "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: "2019",
      description:
        "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: "2021",
      description:
        "Better acquires Trussle — the UK’s most innovative online mortgage broker.",
    },
    {
      year: "2022",
      description:
        "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: "2023",
      description:
        "Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    },
    {
      year: "2023",
      description: "Better Mortgage launches the fully digital 3-day HELOC.",
    },
    {
      year: "2023",
      description: "Better Mortgage launches One Day Verified Approval Letter.",
    },
    {
      year: "Today",
      description:
        "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
      cta: {
        text: "Get started",
        url: "#",
      },
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Company Timeline</h2>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute w-1 bg-green-600 h-full left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div key={index} className="mb-8 w-full flex items-center relative z-10">
              {/* Alternating description */}
              {index % 2 === 0 ? (
                <div className="w-5/12 text-right p-6 bg-white shadow-lg rounded-lg z-20">
                  <p className="text-gray-700">{item.description}</p>
                  {item.cta && (
                    <a
                      href={item.cta.url}
                      className="inline-block mt-4 px-4 py-2 bg-green-600 text-white font-bold rounded-lg"
                    >
                      {item.cta.text}
                    </a>
                  )}
                </div>
              ) : (
                <div className="w-5/12"></div>
              )}

              {/* Year (centered on the line) */}
              <div className="w-2/12 flex justify-center relative z-20">
                <div className="flex items-center justify-center w-24 h-12 bg-green-600 text-white text-lg font-bold rounded-full z-20">
                  {item.year}
                </div>
              </div>

              {/* Alternating description */}
              {index % 2 !== 0 ? (
                <div className="w-5/12 text-left p-6 bg-white shadow-lg rounded-lg z-20">
                  <p className="text-gray-700">{item.description}</p>
                  {item.cta && (
                    <a
                      href={item.cta.url}
                      className="inline-block mt-4 px-4 py-2 bg-green-600 text-white font-bold rounded-lg"
                    >
                      {item.cta.text}
                    </a>
                  )}
                </div>
              ) : (
                <div className="w-5/12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
