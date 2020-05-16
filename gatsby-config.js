module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `./src/`,
        imagesPath: `./src/images/`,
        iconFile: `./src/images/icon.png`,
        typographyPath: `./src/utils/typography`,
        siteTitle: `Portfolio`,
        siteUrl: `https://www.jsleonidkuznetsov.com`,
        siteName: `Leonid Kuznetsov`,
        siteShortName: `LK`,
        siteDescription: `This cool App contains information about my work experience as a software engineer.`,
        siteKeywords: `Software Engineer, JS, TS, Software Developer, React, MOBX, CSS, HTML5, GraphQL`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#02040f`, link: `/` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#002642`,
            link: `/experience`,
          },
          { name: `skills`, title: `Skills`, color: `#840032`, link: `/skills` },
          { name: `aboutMe`, title: `About Me`, color: `#e59500`, link: `/about-me` },
        ],
        email: `js.leonid.kuznetsov@gmail.com`,
        social: {
          // Usernames
          twitter: `1eon_kuznetsov`,
          gitHub: `mrChe`,
          stackOverflow: `7956156/mrche`,
          linkedIn: `in/leonidkuznetsov/`,
          resumeInPdf: `https://registry.jsonresume.org/mrChe`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hello! I'm Kuznetsov Leonid`,
          h2Text: `I'm a Software Engineer since 2012, most of my engineering time you will find me writting some frontend code, talking at a local meetup or helping communities`,
          typewriter: [
            `Coding is my passion 😎`,
            `I'm a 🍕 lover`,
            `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
            `I think one of my values is the <strong>ability to resolve problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours, I'm at the 🏋‍`,
            `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#840032", hover: "#02040f" },
          shape1: {
            color: `#e5dada`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `hand`,
      },
    },
  ],
};
