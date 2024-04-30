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
} from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import InfoIcon from "@mui/icons-material/Info";
import ArticleIcon from "@mui/icons-material/Article";
import i18n from "../../utils/i18n";
import React from "react";

import PsychologyIcon from "@mui/icons-material/Psychology";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReviewsIcon from "@mui/icons-material/Reviews";
import GroupsIcon from "@mui/icons-material/Groups";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import PaymentsIcon from "@mui/icons-material/Payments";
import Article from "@mui/icons-material/Article";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PlaceIcon from "@mui/icons-material/Place";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

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
      href: "/career",
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
      href: "/business",
      icon: <BusinessIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <BusinessIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.resources", { ns: "navigation" }),
      href: "/resources",
      icon: <ArticleIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ArticleIcon style={{ fill: "url(#linearColors)" }} />
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
      href: "/career/ai",
      icon: <PsychologyIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <PsychologyIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.smartJobSearch"),
      href: "/career/smart-search",
      icon: <SearchIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <SearchIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.salaryAndWorkplace"),
      href: "/career/salary-workplace",
      icon: <AttachMoneyIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <AttachMoneyIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.companyReviews"),
      href: "/career/company-reviews",
      icon: <ReviewsIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ReviewsIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.referralAndConnections"),
      href: "/career/referrals-connections",
      icon: <GroupsIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <GroupsIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.applicationStatuses"),
      href: "/career/application-statuses",
      icon: <ThumbsUpDownIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ThumbsUpDownIcon style={{ fill: "url(#linearColors)" }} />
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
  careerMenu.links[4].title = i18n.t(
    "navigation.constants.referralAndConnections",
    {
      ns: "navigation",
    }
  );
  careerMenu.links[5].title = i18n.t(
    "navigation.constants.applicationStatuses",
    {
      ns: "navigation",
    }
  );
}

export const businessMenu = {
  backRoute: "/",
  backTitle: i18n.t("navigation.constants.home"),
  links: [
    {
      title: i18n.t("navigation.constants.recruitmentAI"),
      href: "/business/recruitment-ai",
      icon: <PsychologyIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <PsychologyIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.targetedJobCampaigns"),
      href: "/business/targeted-campaigns",
      icon: <AdsClickIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <AdsClickIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.companyBranding"),
      href: "/business/company-branding",
      icon: <CoPresentIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <CoPresentIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.freeAndPremiumPlans"),
      href: "/business/plans",
      icon: <PaymentsIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <PaymentsIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.payPerApplicantPricing"),
      href: "/business/pay-per-applicant",
      icon: <AttachMoneyIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <AttachMoneyIcon style={{ fill: "url(#linearColors)" }} />
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
  businessMenu.links[3].title = i18n.t(
    "navigation.constants.freeAndPremiumPlans",
    {
      ns: "navigation",
    }
  );
  businessMenu.links[4].title = i18n.t(
    "navigation.constants.payPerApplicantPricing",
    {
      ns: "navigation",
    }
  );
}

export const resourcesMenu = {
  backRoute: "/",
  backTitle: i18n.t("navigation.constants.home"),
  links: [
    {
      title: i18n.t("navigation.constants.articles"),
      href: "/resources/articles",
      icon: <Article sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <Article style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.forum"),
      href: "/resources/forum",
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

function resourcesMenuUpdate() {
  resourcesMenu.backTitle = i18n.t("navigation.constants.home");
  resourcesMenu.links[0].title = i18n.t("navigation.constants.articles", {
    ns: "navigation",
  });
  resourcesMenu.links[1].title = i18n.t("navigation.constants.forum", {
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
      title: i18n.t("navigation.constants.team"),
      href: "/about/team",
      icon: <EmojiPeopleIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <EmojiPeopleIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.offices"),
      href: "/about/offices",
      icon: <PlaceIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <PlaceIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.investors"),
      href: "/about/investors",
      icon: <MonetizationOnIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <MonetizationOnIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.partners"),
      href: "/about/partners",
      icon: <HandshakeIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <HandshakeIcon style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.contactUs"),
      href: "/about/contact",
      icon: <ContactSupportIcon sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ContactSupportIcon style={{ fill: "url(#linearColors)" }} />
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
  aboutMenu.links[1].title = i18n.t("navigation.constants.team", {
    ns: "navigation",
  });
  aboutMenu.links[2].title = i18n.t("navigation.constants.offices", {
    ns: "navigation",
  });
  aboutMenu.links[3].title = i18n.t("navigation.constants.investors", {
    ns: "navigation",
  });
  aboutMenu.links[4].title = i18n.t("navigation.constants.partners", {
    ns: "navigation",
  });
  aboutMenu.links[5].title = i18n.t("navigation.constants.contactUs", {
    ns: "navigation",
  });
}

export const helpMenu = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      title: i18n.t("navigation.constants.careerHelpCenter"),
      href: "/help/career",
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
      href: "/help/business",
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
      href: "/help/career/using-noviopus",
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
      href: "/help/career/faq",
      icon: <QuestionAnswer sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <QuestionAnswer style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.contactUs"),
      href: "/help/career/contact",
      icon: <ContactSupport sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ContactSupport style={{ fill: "url(#linearColors)" }} />
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
      href: "/help/business/using-noviopus",
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
      icon: <QuestionAnswer sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <QuestionAnswer style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
    {
      title: i18n.t("navigation.constants.contactUsBusiness"),
      href: "/help/business/contact",
      icon: <ContactSupport sx={{ fill: "#485C6E" }} />,
      activeIcon: (
        <>
          {gradient}
          <ContactSupport style={{ fill: "url(#linearColors)" }} />
        </>
      ),
    },
  ],
};

function helpMenuupdate() {
  helpMenu.backTitle = i18n.t("constants.home", { ns: "navigation" });
}

export const usingNoviopusMenuCareer = {
  backRoute: "/",
  backTitle: "navigation.constants.home",
  links: [
    {
      href: "/help/career/using-noviopus?id=general",
      title: "navigation.constants.general",
    },
    {
      href: "/help/career/using-noviopus?id=create-an-account",
      title: "navigation.constants.create-account",
    },
    {
      href: "/help/career/using-noviopus?id=create-your-profile",
      title: "navigation.constants.create-profile",
    },
    {
      href: "/help/career/using-noviopus?id=career",
      title: "navigation.constants.career",
    },
    {
      href: "/help/career/using-noviopus?id=settings",
      title: "navigation.constants.settings",
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
  usingNoviopusMenuCareer.links[1].title = i18n.t(
    "navigation.constants.create-account",
    { ns: "navigation" }
  );
  usingNoviopusMenuCareer.links[2].title = i18n.t(
    "navigation.constants.create-profile",
    { ns: "navigation" }
  );
  usingNoviopusMenuCareer.links[3].title = i18n.t(
    "navigation.constants.career",
    { ns: "navigation" }
  );
  usingNoviopusMenuCareer.links[4].title = i18n.t(
    "navigation.constants.settings",
    { ns: "navigation" }
  );
}

export const faqMenuCareer = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    { href: "/help/career/faq?id=new-account", title: "constants.newAccount" },
    {
      href: "/help/career/faq?id=confirm-email",
      title: "constants.confirmEmail",
    },
    {
      href: "/help/career/faq?id=confirm-email-issues",
      title: "constants.confirmEmailIssues",
    },
    { href: "/help/career/faq?id=sign-in", title: "constants.signIn" },
    {
      href: "/help/career/faq?id=reset-password",
      title: "constants.resetPassword",
    },
    { href: "/help/career/faq?id=job-search", title: "constants.jobSearch" },
    {
      href: "/help/career/faq?id=apply-decline-jobs",
      title: "constants.applyDeclineJobs",
    },
    {
      href: "/help/career/faq?id=personal-profile",
      title: "constants.personalProfile",
    },
    {
      href: "/help/career/faq?id=career-profile",
      title: "constants.careerProfile",
    },
    {
      href: "/help/career/faq?id=job-preferences",
      title: "constants.jobPreferences",
    },
    {
      href: "/help/career/faq?id=workplace-preferences",
      title: "constants.workplacePreferences",
    },
    { href: "/help/career/faq?id=connections", title: "constants.connections" },
    {
      href: "/help/career/faq?id=personal-interests",
      title: "constants.personalInterests",
    },
    {
      href: "/help/career/faq?id=change-password",
      title: "constants.changePassword",
    },
  ],
};

function faqMenuCareerUpdate() {
  faqMenuCareer.backTitle = i18n.t("navigation.constants.home", {
    ns: "navigation",
  });
  faqMenuCareer.links[0].title = i18n.t("navigation.constants.new-account", {
    ns: "navigation",
  });
  faqMenuCareer.links[1].title = i18n.t("navigation.constants.confirm-email", {
    ns: "navigation",
  });
  faqMenuCareer.links[2].title = i18n.t(
    "navigation.constants.confirm-email-issues",
    { ns: "navigation" }
  );
  faqMenuCareer.links[3].title = i18n.t("navigation.constants.sign-in", {
    ns: "navigation",
  });
  faqMenuCareer.links[4].title = i18n.t("navigation.constants.reset-password", {
    ns: "navigation",
  });
  faqMenuCareer.links[5].title = i18n.t("navigation.constants.job-search", {
    ns: "navigation",
  });
  faqMenuCareer.links[6].title = i18n.t(
    "navigation.constants.apply-decline-jobs",
    { ns: "navigation" }
  );
  faqMenuCareer.links[7].title = i18n.t(
    "navigation.constants.personal-profile",
    { ns: "navigation" }
  );
  faqMenuCareer.links[8].title = i18n.t("navigation.constants.career-profile", {
    ns: "navigation",
  });
  faqMenuCareer.links[9].title = i18n.t(
    "navigation.constants.job-preferences",
    { ns: "navigation" }
  );
  faqMenuCareer.links[10].title = i18n.t(
    "navigation.constants.workplace-preferences",
    { ns: "navigation" }
  );
  faqMenuCareer.links[11].title = i18n.t("navigation.constants.connections", {
    ns: "navigation",
  });
  faqMenuCareer.links[12].title = i18n.t(
    "navigation.constants.personal-interests",
    { ns: "navigation" }
  );
  faqMenuCareer.links[13].title = i18n.t(
    "navigation.constants.change-password",
    { ns: "navigation" }
  );
}

export const usingNoviopusMenuBusiness = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      href: "/help/business/using-noviopus?id=general",
      title: "constants.general",
    },
    {
      href: "/help/business/using-noviopus?id=noviopus-business",
      title: "Noviopus business",
    },
    {
      href: "/help/business/using-noviopus?id=account-type",
      title: "constants.accountType",
    },
    {
      href: "/help/business/using-noviopus?id=homepage",
      title: "constants.homepage",
    },
    {
      href: "/help/business/using-noviopus?id=company",
      title: "constants.company",
    },
    { href: "/help/business/using-noviopus?id=jobs", title: "constants.jobs" },
    {
      href: "/help/business/using-noviopus?id=candidate-profile",
      title: "constants.candidateProfile",
    },
    {
      href: "/help/business/using-noviopus?id=candidates",
      title: "constants.candidates",
    },
    {
      href: "/help/business/using-noviopus?id=ad-campaigns",
      title: "constants.adCampaigns",
    },
    {
      href: "/help/business/using-noviopus?id=reports",
      title: "constants.reports",
    },
    {
      href: "/help/business/using-noviopus?id=settings",
      title: "constants.settings",
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
  usingNoviopusMenuBusiness.links[1].title = i18n.t(
    "navigation.constants.noviopus-business",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[2].title = i18n.t(
    "navigation.constants.account-type",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[3].title = i18n.t(
    "navigation.constants.home-page",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[4].title = i18n.t(
    "navigation.constants.company",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[5].title = i18n.t(
    "navigation.constants.jobs",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[6].title = i18n.t(
    "navigation.constants.candidate-profile",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[7].title = i18n.t(
    "navigation.constants.candidates",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[8].title = i18n.t(
    "navigation.constants.ad-campaigns",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[9].title = i18n.t(
    "navigation.constants.reports",
    { ns: "navigation" }
  );
  usingNoviopusMenuBusiness.links[10].title = i18n.t(
    "navigation.constants.settings",
    { ns: "navigation" }
  );
}

export const faqMenuBusiness = {
  backRoute: "/",
  backTitle: "constants.home",
  links: [
    {
      href: "/help/business/faq?id=new-account",
      title: "constants.newAccount",
    },
    {
      href: "/help/business/faq?id=confirm-email",
      title: "constants.confirmEmail",
    },
    {
      href: "/help/business/faq?id=confirm-email-issues",
      title: "constants.confirmEmailIssues",
    },
    { href: "/help/business/faq?id=sign-in", title: "constants.signIn" },
    {
      href: "/help/business/faq?id=reset-password",
      title: "constants.resetPassword",
    },
    {
      href: "/help/business/faq?id=create-company",
      title: "constants.createCompany",
    },
    { href: "/help/business/faq?id=create-job", title: "constants.createJob" },
    { href: "/help/business/faq?id=manage-job", title: "constants.manageJob" },
    {
      href: "/help/business/faq?id=account-settings",
      title: "constants.accountSettings",
    },
    {
      href: "/help/business/faq?id=change-password",
      title: "constants.changePassword",
    },
    { href: "/help/business/faq?id=languages", title: "constants.languages" },
    {
      href: "/help/business/faq?id=suspend-account",
      title: "constants.suspendAccount",
    },
    {
      href: "/help/business/faq?id=delete-account",
      title: "constants.deleteAccount",
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
  faqMenuBusiness.links[1].title = i18n.t(
    "navigation.constants.confirm-email",
    { ns: "navigation" }
  );
  faqMenuBusiness.links[2].title = i18n.t(
    "navigation.constants.confirm-email-issues",
    { ns: "navigation" }
  );
  faqMenuBusiness.links[3].title = i18n.t("navigation.constants.sign-in", {
    ns: "navigation",
  });
  faqMenuBusiness.links[4].title = i18n.t(
    "navigation.constants.reset-password",
    { ns: "navigation" }
  );
  faqMenuBusiness.links[5].title = i18n.t(
    "navigation.constants.create-company",
    { ns: "navigation" }
  );
  faqMenuBusiness.links[6].title = i18n.t("navigation.constants.create-job", {
    ns: "navigation",
  });
  faqMenuBusiness.links[7].title = i18n.t("navigation.constants.manage-job", {
    ns: "navigation",
  });
  faqMenuBusiness.links[8].title = i18n.t(
    "navigation.constants.account-settings",
    { ns: "navigation" }
  );
  faqMenuBusiness.links[9].title = i18n.t(
    "navigation.constants.change-password",
    { ns: "navigation" }
  );
  faqMenuBusiness.links[10].title = i18n.t("navigation.constants.languages", {
    ns: "navigation",
  });
  faqMenuBusiness.links[11].title = i18n.t(
    "navigation.constants.suspend-account",
    { ns: "navigation" }
  );
  faqMenuBusiness.links[12].title = i18n.t(
    "navigation.constants.delete-account",
    { ns: "navigation" }
  );
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
    icon: <Policy sx={{ fill: "#485C6E" }} />,
    activeIcon: (
      <>
        {gradient}
        <Policy style={{ fill: "url(#linearColors)" }} />
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
    path: `/${lng}/career`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/career/ai`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/career/smart-search`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/career/salary-workplace`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/career/company-reviews`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/career/referrals-connections`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/career/application-statuses`,
    menu: careerMenu,
  },
  {
    path: `/${lng}/business`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/business/recruitment-ai`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/business/targeted-campaigns`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/business/company-branding`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/business/plans`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/business/pay-per-applicant`,
    menu: businessMenu,
  },
  {
    path: `/${lng}/resources/articles`,
    menu: resourcesMenu,
  },
  {
    path: `/${lng}/resources/forum`,
    menu: resourcesMenu,
  },
  {
    path: `/${lng}/resources`,
    menu: resourcesMenu,
  },
  {
    path: `/${lng}/about`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/about/team`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/about/offices`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/about/investors`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/about/partners`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/about/contact`,
    menu: aboutMenu,
  },
  {
    path: `/${lng}/account/profile/edit`,
    menu: settingsMenu,
  },
  {
    path: `/${lng}/account/upload/edit`,
    menu: careerProfileMenu,
  },
  {
    path: `/${lng}/account/education/edit`,
    menu: careerProfileMenu,
  },
  {
    path: `/${lng}/account/experience/edit`,
    menu: careerProfileMenu,
  },
  {
    path: `/${lng}/account/skills/edit`,
    menu: careerProfileMenu,
  },
  {
    path: `/${lng}/account/languages/edit`,
    menu: careerProfileMenu,
  },
  {
    path: `/${lng}/account/network/edit`,
    menu: socialProfileMenu,
  },
  {
    path: `/${lng}/account/add-contacts/edit`,
    menu: socialProfileMenu,
  },
  {
    path: `/${lng}/account/interests/edit`,
    menu: socialProfileMenu,
  },
  {
    path: `/${lng}/account/job-search/edit`,
    menu: jobPreferencesMenu,
  },
  {
    path: `/${lng}/account/workplace/edit`,
    menu: jobPreferencesMenu,
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
    path: `/${lng}/help/career`,
    menu: careerHelpMenu,
  },
  {
    path: `/${lng}/help/business`,
    menu: businessHelpMenu,
  },
  {
    path: `/${lng}/help/career/using-noviopus`,
    menu: usingNoviopusMenuCareer,
  },
  {
    path: `/${lng}/help/career/using-noviopus/general`,
    menu: usingNoviopusMenuCareer,
  },
  {
    path: `/${lng}/help/career/using-noviopus/create-an-account`,
    menu: usingNoviopusMenuCareer,
  },
  {
    path: `/${lng}/help/career/using-noviopus/create-your-profile`,
    menu: usingNoviopusMenuCareer,
  },
  {
    path: `/${lng}/help/career/using-noviopus/career`,
    menu: usingNoviopusMenuCareer,
  },
  {
    path: `/${lng}/help/career/using-noviopus/settings`,
    menu: usingNoviopusMenuCareer,
  },
  {
    path: `/${lng}/help/career/faq`,
    menu: faqMenuCareer,
  },
  {
    path: `/${lng}/help/career/contact`,
    menu: careerHelpMenu,
  },
  {
    path: `/${lng}/help/business/using-noviopus`,
    menu: usingNoviopusMenuBusiness,
  },
  {
    path: `/${lng}/help/business/faq`,
    menu: faqMenuBusiness,
  },
  {
    path: `/${lng}/help/business/contact`,
    menu: businessHelpMenu,
  },
];

// export const systemLanguages = [
//   { name: "English", value: "en" },
//   { name: "Hebrew", value: "he" },
// ];
