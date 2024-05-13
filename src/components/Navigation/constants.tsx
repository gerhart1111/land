import {
  AccountCircle,
  Business,
  ContactSupport,
  Contacts,
  EditAttributes,
  Favorite,
  Forum,
  Gavel,
  Home,
  ImportContacts,
  Language,
  Policy,
  Public,
  QuestionAnswer,
  School,
  Security,
  Settings,
  Tune,
  Work,
  FindInPage,
  BusinessCenter,
  EuroSymbol,
  AssuredWorkload,
  DomainVerification,
  Description,
  DriveEta,
  PersonSearch,
  LocationSearching,
  Newspaper,
  Quiz,
  ConnectWithoutContact,
  Shield,
} from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import InfoIcon from "@mui/icons-material/Info";
import i18n from "../../utils/i18n";
import React from "react";

export const gradient = (
  <svg width={0} height={0} style={{ margin: 0 }}>
    <linearGradient id="linearColors" x1={1} y1={1} x2={0} y2={1}>
      <stop offset={0} stopColor="#00a9a8" />
      <stop offset={1} stopColor="#00799b" />
    </linearGradient>
  </svg>
);

const homeMenu = {
  links: [
    {
      title: i18n.t("navigation.constants.home", { ns: "navigation" }),
      href: "/",
      icon: <Home sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Home style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.career", { ns: "navigation" }),
      href: "/citizenship",
      icon: <PeopleIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <PeopleIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.business", { ns: "navigation" }),
      href: "/documents",
      icon: <BusinessCenter sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <BusinessCenter style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.resources", { ns: "navigation" }),
      href: "/search-human",
      icon: <FindInPage sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <FindInPage style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.about", { ns: "navigation" }),
      href: "/about",
      icon: <InfoIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <InfoIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

const homeMenuUpdate = () => {
  homeMenu.links[0].title = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  homeMenu.links[1].title = i18n.t("navigation.constants.career", {
    ns: "navigation",
  });
  homeMenu.links[2].title = i18n.t("navigation.constants.business", {
    ns: "navigation",
  });
  homeMenu.links[3].title = i18n.t("navigation.constants.resources", {
    ns: "navigation",
  });
  homeMenu.links[4].title = i18n.t("navigation.constants.about", {
    ns: "navigation",
  });
};

export const settingsMenu = {
  backRoute: "/",
  // backTitle: i18n.t('constants.home', { ns: 'navigation' }),
  links: [
    {
      title: "constants.personalProfile",
      href: "/account/profile/edit",
      icon: <AccountCircle />,
      activeIcon: (
        <>
          {gradient}
          <AccountCircle style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.careerProfile",
      href: "/account/education/edit",
      icon: <Work />,
      activeIcon: (
        <>
          {gradient}
          <Work style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.jobPreferences",
      href: "/account/job-search/edit",
      icon: <Tune />,
      activeIcon: (
        <>
          {gradient}
          <Tune style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.socialProfile",
      href: "/account/add-contacts/edit",
      icon: <Contacts />,
      activeIcon: (
        <>
          {gradient}
          <Contacts style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.account",
      href: "/account/security",
      icon: <Settings />,
      activeIcon: (
        <>
          {gradient}
          <Settings style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

const settingsMenuUpdate = () => {
  settingsMenu.links[0].title = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  settingsMenu.links[1].title = i18n.t("navigation.constants.career", {
    ns: "navigation",
  });
  settingsMenu.links[2].title = i18n.t("navigation.constants.business", {
    ns: "navigation",
  });
  settingsMenu.links[3].title = i18n.t("navigation.constants.resources", {
    ns: "navigation",
  });
  settingsMenu.links[4].title = i18n.t("navigation.constants.about", {
    ns: "navigation",
  });
};

export const careerProfileMenu = {
  backRoute: "/account/profile/edit",
  backTitle: "constants.settings",
  links: [
    // {
    //   title: 'Resume',
    //   href: '/account/upload/edit',
    //   icon: <Description />,
    //   activeIcon: (
    //     <>
    //       {gradient}
    //       <Description style={{ fill: 'url(#linearColors)' }} />
    //     </>
    //   ),
    // },
    {
      title: "constants.education",
      href: "/account/education/edit",
      icon: <School />,
      activeIcon: (
        <>
          {gradient}
          <School style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.workExperience",
      href: "/account/experience/edit",
      icon: <Work />,
      activeIcon: (
        <>
          {gradient}
          <Work style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.skills",
      href: "/account/skills/edit",
      icon: <EditAttributes />,
      activeIcon: (
        <>
          {gradient}
          <EditAttributes style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.languages",
      href: "/account/languages/edit",
      icon: <Language />,
      activeIcon: (
        <>
          {gradient}
          <Language style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

const careerProfileMenuUpdate = () => {
  careerProfileMenu.backTitle = i18n.t("navigation.constants.settings", {
    ns: "navigation",
  });
  careerProfileMenu.links[0].title = i18n.t("navigation.constants.education", {
    ns: "navigation",
  });
  careerProfileMenu.links[1].title = i18n.t(
    "navigation.constants.work-experience",
    { ns: "navigation" }
  );
  careerProfileMenu.links[2].title = i18n.t("navigation.constants.skills", {
    ns: "navigation",
  });
  careerProfileMenu.links[3].title = i18n.t("navigation.constants.languages", {
    ns: "navigation",
  });
};

export const jobPreferencesMenu = {
  backRoute: "/account/profile/edit",
  backTitle: "constants.settings",
  links: [
    {
      title: "constants.jobPreferences",
      href: "/account/job-search/edit",
      icon: <Tune />,
      activeIcon: (
        <>
          {gradient}
          <Tune style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.workplace",
      href: "/account/workplace/edit",
      icon: <Settings />,
      activeIcon: (
        <>
          {gradient}
          <Settings style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function jobPreferencesMenuUpdate() {
  jobPreferencesMenu.backTitle = i18n.t("navigation.constants.settings", {
    ns: "navigation",
  });
  jobPreferencesMenu.links[0].title = i18n.t(
    "navigation.constants.job-preferences",
    { ns: "navigation" }
  );
  jobPreferencesMenu.links[1].title = i18n.t("navigation.constants.workplace", {
    ns: "navigation",
  });
}

export const socialProfileMenu = {
  backRoute: "/account/profile/edit",
  backTitle: "constants.settings",
  links: [
    {
      title: "constants.connections",
      href: "/account/add-contacts/edit",
      icon: <Contacts />,
      activeIcon: (
        <>
          {gradient}
          <Contacts style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.personalInterests",
      href: "/account/interests/edit",
      icon: <Favorite />,
      activeIcon: (
        <>
          {gradient}
          <Favorite style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.socialAccounts",
      href: "/account/network/edit",
      icon: <ImportContacts />,
      activeIcon: (
        <>
          {gradient}
          <ImportContacts style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function socialProfileMenuUpdate() {
  socialProfileMenu.backTitle = i18n.t("navigation.constants.settings", {
    ns: "navigation",
  });
  socialProfileMenu.links[0].title = i18n.t(
    "navigation.constants.connections",
    { ns: "navigation" }
  );
  socialProfileMenu.links[1].title = i18n.t(
    "navigation.constants.personal-interests",
    { ns: "navigation" }
  );
  socialProfileMenu.links[2].title = i18n.t(
    "navigation.constants.social-accounts",
    { ns: "navigation" }
  );
}

export const accountMenu = {
  backRoute: "/account/profile/edit",
  backTitle: "constants.settings",
  links: [
    {
      title: "constants.security",
      href: "/account/security",
      icon: <Security />,
      activeIcon: (
        <>
          {gradient}
          <Security style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.languageRegion",
      href: "/account/language",
      icon: <Language />,
      activeIcon: (
        <>
          {gradient}
          <Language style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.accountStatus",
      href: "/account/status",
      icon: <Settings />,
      activeIcon: (
        <>
          {gradient}
          <Settings style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function accountMenuUpdate() {
  accountMenu.backTitle = i18n.t("navigation.constants.settings", {
    ns: "navigation",
  });
  accountMenu.links[0].title = i18n.t("navigation.constants.security", {
    ns: "navigation",
  });
  accountMenu.links[1].title = i18n.t("navigation.constants.language-region", {
    ns: "navigation",
  });
  accountMenu.links[2].title = i18n.t("navigation.constants.account-status", {
    ns: "navigation",
  });
}

export const signedInCareerMenu = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      title: "constants.jobs",
      href: "/search",
      icon: <Work />,
      activeIcon: (
        <>
          {gradient}
          <Work style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.jobPreferences",
      href: "/career/job-search/edit",
      icon: <Tune />,
      activeIcon: (
        <>
          {gradient}
          <Tune style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: "constants.workplace",
      href: "/career/workplace/edit",
      icon: <Settings />,
      activeIcon: (
        <>
          {gradient}
          <Settings style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function signedInCareerMenuUpdate() {
  signedInCareerMenu.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  signedInCareerMenu.links[0].title = i18n.t("navigation.constants.jobs", {
    ns: "navigation",
  });
  signedInCareerMenu.links[1].title = i18n.t(
    "navigation.constants.job-preferences",
    { ns: "navigation" }
  );
  signedInCareerMenu.links[2].title = i18n.t("navigation.constants.workplace", {
    ns: "navigation",
  });
}

export const careerMenu = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      title: i18n.t("navigation.constants.careerAi"),
      href: "/citizenship/eu",
      icon: <EuroSymbol sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <EuroSymbol style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.smartJobSearch"),
      href: "/citizenship/legalization",
      icon: <AssuredWorkload sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <AssuredWorkload style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.salaryAndWorkplace"),
      href: "/citizenship/pass-ua",
      icon: <Public sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Public style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.companyReviews"),
      href: "/citizenship/pass-ru",
      icon: <Public sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Public style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function careerMenuUpdate() {
  careerMenu.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  careerMenu.links[0].title = i18n.t("navigation.constants.careerAi", {
    ns: "navigation",
  });
  careerMenu.links[1].title = i18n.t("navigation.constants.smartJobSearch", {
    ns: "navigation",
  });
  careerMenu.links[2].title = i18n.t(
    "navigation.constants.salaryAndWorkplace",
    {
      ns: "navigation",
    }
  );
  careerMenu.links[3].title = i18n.t("navigation.constants.companyReviews", {
    ns: "navigation",
  });
}

export const businessMenu = {
  backRoute: "/",
  backTitle: i18n.t("navigation.constants.home"),
  links: [
    {
      title: i18n.t("navigation.constants.recruitmentAI"),
      href: "/documents/visas",
      icon: <DomainVerification sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <DomainVerification style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.targetedJobCampaigns"),
      href: "/documents/certificates",
      icon: <Description sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Description style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.companyBranding"),
      href: "/documents/driver-license",
      icon: <DriveEta sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <DriveEta style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function businessMenuUpdate() {
  careerMenu.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  businessMenu.links[0].title = i18n.t("navigation.constants.recruitmentAI", {
    ns: "navigation",
  });
  businessMenu.links[1].title = i18n.t(
    "navigation.constants.targetedJobCampaigns",
    {
      ns: "navigation",
    }
  );
  businessMenu.links[2].title = i18n.t("navigation.constants.companyBranding", {
    ns: "navigation",
  });
}

export const resourcesMenu = {
  backRoute: "/",
  backTitle: i18n.t("navigation.constants.home"),
  links: [
    {
      title: i18n.t("navigation.constants.team"),
      href: "/search-human/bio",
      icon: <PersonSearch sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <PersonSearch style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.offices"),
      href: "/search-human/geo",
      icon: <LocationSearching sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <LocationSearching style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function resourcesMenuUpdate() {
  resourcesMenu.backTitle = i18n.t("navigation.constants.home");
  aboutMenu.links[1].title = i18n.t("navigation.constants.team", {
    ns: "navigation",
  });
  aboutMenu.links[2].title = i18n.t("navigation.constants.offices", {
    ns: "navigation",
  });
}

export const aboutMenu = {
  backRoute: "/",
  backTitle: i18n.t("navigation.constants.home"),
  links: [
    {
      title: i18n.t("navigation.constants.aboutUs"),
      href: "/about",
      icon: <InfoIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <InfoIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.articles"),
      href: "/about/articles",
      icon: <Newspaper sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Newspaper style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.forum"),
      href: "/about/forum",
      icon: <Forum sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Forum style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function aboutMenuUpdate() {
  resourcesMenu.backTitle = i18n.t("navigation.constants.home");
  aboutMenu.links[0].title = i18n.t("navigation.constants.aboutUs", {
    ns: "navigation",
  });
  resourcesMenu.links[0].title = i18n.t("navigation.constants.articles", {
    ns: "navigation",
  });
  resourcesMenu.links[1].title = i18n.t("navigation.constants.forum", {
    ns: "navigation",
  });
}

export const helpMenu = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      title: i18n.t("navigation.constants.careerHelpCenter"),
      href: "/help/personal/information",
      icon: <Public sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Public style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.businessHelpCenter"),
      href: "/help/business/information",
      icon: <Business sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Business style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

export const careerHelpMenu = {
  backRoute: "/help",
  backTitle: i18n.t("navigation.constants.help"),
  links: [
    {
      title: i18n.t("navigation.constants.usingNoviopus"),
      href: "/help/personal/information",
      icon: <School sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <School style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.faq"),
      href: "/help/personal/faq",
      icon: <Quiz sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Quiz style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.contactUs"),
      href: "/help/personal/contact",
      icon: <ConnectWithoutContact sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ConnectWithoutContact style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

export const businessHelpMenu = {
  backRoute: "/help",
  backTitle: i18n.t("navigation.constants.help"),
  links: [
    {
      title: i18n.t("navigation.constants.usingNoviopusBusiness"),
      href: "/help/business/information",
      icon: <School sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <School style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.faqBusiness"),
      href: "/help/business/faq",
      icon: <Quiz sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Quiz style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.contactUsBusiness"),
      href: "/help/business/contact",
      icon: <ConnectWithoutContact sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ConnectWithoutContact style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function helpMenuupdate() {
  helpMenu.backTitle = i18n.t("constants.home", { ns: "navigation" });
  helpMenu.links[0].title = i18n.t("navigation.constants.careerHelpCenter", {
    ns: "navigation",
  });
  helpMenu.links[1].title = i18n.t("navigation.constants.businessHelpCenter", {
    ns: "navigation",
  });

  careerHelpMenu.links[0].title = i18n.t("navigation.constants.usingNoviopus", {
    ns: "navigation",
  });
  careerHelpMenu.links[1].title = i18n.t("navigation.constants.faq", {
    ns: "navigation",
  });
  careerHelpMenu.links[2].title = i18n.t("navigation.constants.contactUs", {
    ns: "navigation",
  });
}

function helpMenuBusinessUpdate() {
  businessHelpMenu.links[0].title = i18n.t(
    "navigation.constants.usingNoviopusBusiness",
    { ns: "navigation" }
  );
  businessHelpMenu.links[1].title = i18n.t("navigation.constants.faqBusiness", {
    ns: "navigation",
  });
  businessHelpMenu.links[2].title = i18n.t(
    "navigation.constants.contactUsBusiness",
    { ns: "navigation" }
  );
}

export const usingNoviopusMenuCareer = {
  backRoute: "/",
  backTitle: "navigation.constants.home",
  links: [
    {
      href: "/help/career/using-noviopus",
      title: "navigation.constants.general",
    },
  ],
};

function usingNoviopusMenuCareerUpdate() {
  usingNoviopusMenuCareer.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  usingNoviopusMenuCareer.links[0].title = i18n.t(
    "navigation.constants.general",
    { ns: "navigation" }
  );
}

export const faqMenuCareer = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [{ href: "/help/career/faq", title: "constants.newAccount" }],
};

function faqMenuCareerUpdate() {
  faqMenuCareer.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  faqMenuCareer.links[0].title = i18n.t("navigation.constants.new-account", {
    ns: "navigation",
  });
}

export const usingNoviopusMenuBusiness = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      href: "/help/business/information",
      title: "constants.general",
    },
  ],
};

function usingNoviopusMenuBusinessUpdate() {
  usingNoviopusMenuBusiness.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  usingNoviopusMenuBusiness.links[0].title = i18n.t(
    "navigation.constants.general",
    { ns: "navigation" }
  );
}

export const faqMenuBusiness = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      href: "/help/business/faq",
      title: "constants.newAccount",
    },
  ],
};

function faqMenuBusinessUpdate() {
  faqMenuBusiness.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  faqMenuBusiness.links[0].title = i18n.t("navigation.constants.new-account", {
    ns: "navigation",
  });
}

export const helpMenuLinks = [
  {
    title: "constants.terms",
    href: "/terms",
    icon: <Gavel sx={{ fill: "#485C6E" }} />,
    activeIcon: (
      <>
        {gradient}
        <Gavel style={{ fill: "url(#linearColors)" }} />
      </>
    ),
  },
  {
    title: "constants.privacyPolicy",
    href: "/privacy",
    icon: <Shield sx={{ fill: "#485C6E" }} />,
    activeIcon: (
      <>
        {gradient}
        <Shield style={{ fill: "url(#linearColors)" }} />
      </>
    ),
  },
];

function helpMenuUpdate() {
  helpMenuLinks[0].title = i18n.t("navigation.terms", { ns: "navigation" });
  helpMenuLinks[1].title = i18n.t("navigation.privacy", { ns: "navigation" });
}

export const privacyTermsMenu = {
  backRoute: "/",
  backTitle: "constants.home",
  links: helpMenuLinks,
};

function privacyTermsMenuUpdate() {
  privacyTermsMenu.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
}

i18n.loadNamespaces("navigation");

if (i18n.isInitialized) {
  homeMenuUpdate();
  settingsMenuUpdate();
  careerProfileMenuUpdate();
  jobPreferencesMenuUpdate();
  socialProfileMenuUpdate();
  accountMenuUpdate();
  signedInCareerMenuUpdate();
  careerMenuUpdate();
  helpMenuupdate();
  usingNoviopusMenuCareerUpdate();
  faqMenuCareerUpdate();
  usingNoviopusMenuBusinessUpdate();
  faqMenuBusinessUpdate();
  helpMenuUpdate();
  helpMenuBusinessUpdate();
  privacyTermsMenuUpdate();
  businessMenuUpdate();
  resourcesMenuUpdate();
  aboutMenuUpdate();
}
i18n.on("languageChanged", () => {
  homeMenuUpdate();
  settingsMenuUpdate();
  careerProfileMenuUpdate();
  jobPreferencesMenuUpdate();
  socialProfileMenuUpdate();
  accountMenuUpdate();
  signedInCareerMenuUpdate();
  careerMenuUpdate();
  helpMenuupdate();
  helpMenuBusinessUpdate();
  usingNoviopusMenuCareerUpdate();
  faqMenuCareerUpdate();
  usingNoviopusMenuBusinessUpdate();
  faqMenuBusinessUpdate();
  helpMenuUpdate();
  privacyTermsMenuUpdate();
  businessMenuUpdate();
  resourcesMenuUpdate();
  aboutMenuUpdate();
});

i18n.on("loaded", function () {
  homeMenuUpdate();
  settingsMenuUpdate();
  careerProfileMenuUpdate();
  jobPreferencesMenuUpdate();
  socialProfileMenuUpdate();
  accountMenuUpdate();
  signedInCareerMenuUpdate();
  careerMenuUpdate();
  helpMenuupdate();
  helpMenuBusinessUpdate();
  usingNoviopusMenuCareerUpdate();
  faqMenuCareerUpdate();
  usingNoviopusMenuBusinessUpdate();
  faqMenuBusinessUpdate();
  helpMenuUpdate();
  privacyTermsMenuUpdate();
  businessMenuUpdate();
  resourcesMenuUpdate();
  aboutMenuUpdate();
});

export const getRoutes = (lng: any) => [
  {
    path: `/${lng}`,
    menu: homeMenu,
  },
  {
    path: `/${lng}/company/:id`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/company/:id/jobs`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/jobs/:id`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/citizenship`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/citizenship/eu`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/citizenship/legalization`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/citizenship/pass-ua`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/citizenship/pass-ru`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/documents`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/documents/visas`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/documents/certificates`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/documents/driver-license`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/documents/plans`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/documents/pay-per-applicant`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/search-human/bio`,
    menu: resourcesMenu,
  },
  {
    path: `/${lng}/search-human/geo`,
    menu: resourcesMenu,
  },
  {
    path: `/${lng}/search-human`,
    menu: resourcesMenu,
  },
  {
    path: `/${lng}/about`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/about/articles`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/about/forum`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/career/job-search/edit`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/career/workplace/edit`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/account/security`,
    menu: accountMenu,
  },
  {
    path: `/${lng}/account/language`,
    menu: accountMenu,
  },
  {
    path: `/${lng}/account/status`,
    menu: accountMenu,
  },
  {
    path: `/${lng}/terms`,
    menu: privacyTermsMenu,
  },
  {
    path: `/${lng}/privacy`,
    menu: privacyTermsMenu,
  },
  {
    path: `/${lng}/help`,
    menu: helpMenu,
  },
  {
    path: `/${lng}/help/personal/information`,
    menu: careerHelpMenu,
  },
  {
    path: `/${lng}/help/business`,
    menu: businessHelpMenu,
  },
  {
    path: `/${lng}/help/personal/information`,
    menu: careerHelpMenu,
  },
  {
    path: `/${lng}/help/personal/faq`,
    menu: careerHelpMenu,
  },
  {
    path: `/${lng}/help/personal/contact`,
    menu: careerHelpMenu,
  },
  {
    path: `/${lng}/help/business/information`,
    menu: businessHelpMenu,
  },
  {
    path: `/${lng}/help/business/faq`,
    menu: businessHelpMenu,
  },
  {
    path: `/${lng}/help/business/contact`,
    menu: businessHelpMenu,
  },
];
