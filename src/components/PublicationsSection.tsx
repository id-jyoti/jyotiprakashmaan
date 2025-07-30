// components/PublicationsSection.tsx
export default function PublicationsSection() {
  const publications = [
    {
      title: "Reliability Calculation in Arbitrary Topology of Communication Network",
      source: "IEEE",
      date: "23 Apr 2018",
      description:
        "In this paper, different techniques of reliability estimation are proposed for networks with arbitrary topology. The paper includes an algorithm to estimate the reliability of terminal pairs in various network topologies.",
      link: "https://ieeexplore.ieee.org/document/8344710",
    },
    {
      title:
        "Algorithm to Enhance Network Reliability by Analyzing the Performance of Energy Efficient Reliability Algorithm (EERA) in NS2.35",
      source: "International Journal of Information Systems & Management Science",
      date: "11 Apr 2019",
      description:
        "This research proposes an energy-efficient reliability algorithm (EERA) and evaluates its performance in NS2.35 to enhance network reliability.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3369840",
    },
  ];

  return (
    <section id="publications" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
        Publications
      </h2>

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow transition hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {pub.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>{pub.source}</strong> · {pub.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{pub.description}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Read Full Paper →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
