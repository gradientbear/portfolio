import Image from "next/image";

const featured = [
  {
    id: 0,
    image: "/projects/01_portfolio.png",
    title: "My portfolio",
    langs: [
      { image: "/language_icons/typescript.svg", title: "TypeScript" },
      { image: "/language_icons/nextjs.svg", title: "NextJS" },
      { image: "/language_icons/vscode.svg", title: "VS Code" },
      { image: "/language_icons/sass.svg", title: "SASS/SCSS" },
    ],
    source: "https://github.com/gradientbear/portfolio",
    desc: "My self-made portfolio website you're currently looking at.",
  },
  {
    id: 1,
    image: "/projects/01_output.gif",
    title: "Top View Car Detection",
    langs: [
      { image: "/language_icons/csharp.svg", title: "C#" },
      { image: "/language_icons/vs.svg", title: "Visual Studio" },
    ],
    source: "https://github.com/gradientbear/Top-View-Car-Detection-and-Enumeration-with-YOLOv5-Deep-SORT",
    desc: 'This repository implements a system for detecting, tracking, and counting cars from a top-view perspective using YOLOv5 for object detection and Deep SORT for multi-object tracking.',
  },
  {
    id: 2,
    image: "/projects/03_segmentation.png",
    title: "Breast Tumor Segmentation",
    langs: [
      { image: "/language_icons/java.svg", title: "Java" },
      { image: "/language_icons/intellij.svg", title: "IntelliJ IDEA" },
      { image: "/language_icons/mongodb.svg", title: "MongoDB" },
    ],
    source: "https://github.com/gradientbear/Attention-Enriched-Deep-Learning-Model-for-Breast-Tumor-Segmentation",
    desc: "Breast tumor segmentation in ultrasound images poses unique challenges due to high variability in tumor shape and boundaries. Unlike other organs, classical priors such as shape or boundary constraints are difficult to apply. To address this, we propose integrating visual saliency — which highlights regions likely to attract radiologists’ attention — into a deep learning framework.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="padding-section" id="featured">
      <div className="container">
        <div className="row">
          <div className="column-centered">
            <h1>Featured Projects</h1>
          </div>
        </div>
        <div className="row padding-row x-axis-space-between y-axis-stretched">
          <div className="column">
            {featured.map((project, i) => (
              <div
                className={`featured ${project.id % 2 === 1 ? "featured-right" : ""
                  }`}
                key={i}
              >
                <div className="image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="featured-thumbnail"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="featured-inner">
                  <h1>{project.title}</h1>
                  <h3>Description</h3>
                  <p>{project.desc}</p>
                  <h3>Built with</h3>
                  <div className="icon-container">
                    {project.langs.map((icon, i) => (
                      <Image
                        key={i}
                        src={icon.image}
                        alt={icon.title + "icon"}
                        title={icon.title}
                        width={50}
                        height={50}
                      />
                    ))}
                  </div>
                  <a
                    href={project.source}
                    className="featured-source"
                    target="_blank"
                    rel="noreferrer"
                    title="View on GitHub"
                    aria-label="source"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}