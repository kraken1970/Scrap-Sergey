import React from "react";

import EmailSubscriptionForm from "../../Forms/EmailSubscriptionForm";

import { idKey } from "../../../TEMPORARY/helpers";

import classNames from "classnames";
import styles from "./footerBlock.module.scss";

import faceboocIcon from "../../../images/social/facebook.svg";
import twitIcom from "../../../images/social/twitter.svg";
import insIcon from "../../../images/social/inst.svg";

const socialIcon = [faceboocIcon, twitIcom, insIcon];

const footerList = [
  "About",
  "Scrapbook",
  "Advertising",
  "Sportlight",
  "Resources",
  "Terms of use",
  "Contact",
  "Help & FAQ",
  "Privacy Policy"
];

const FooterBlock = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={classNames("mainWrapper")}>
        <div className={styles.content}>
          <div className={styles.subscribe}>
            <p className={styles.subscribeText}>
              Subscribe our newsletter to receive exclusive offers and the
              latest sport news
            </p>

            <EmailSubscriptionForm />

            <button
              className={classNames(
                "btnDropdown",
                "btnFooter",
                styles.btnFooterPost
              )}
            >
              post
            </button>
          </div>

          <div className={styles.nav}>
            <div className={styles.logo}>
              <a
                href="localhost:3000"
                className={classNames("logotype", styles.footerLogotype)}
              >
                Scrap<span className="logotype-span">Sports</span>
              </a>

              <p className={styles.copyright}>© 2019</p>
            </div>

            <div className={styles.menu}>
              <ul className={styles.groupItems}>
                {footerList.map(item => {
                  return (
                    <li key={idKey()} className={styles.menuList}>
                      <a href="localhost:3000" className={styles.menuLink}>
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.footerSocial}>
              <p className={styles.footerSocialText}>Follow</p>

              <div className={styles.social}>
                {socialIcon.map(item => {
                  return (
                    <a href="localhost:3000" className={styles.socialLink}>
                      <img
                        src={item}
                        alt={item}
                        className={styles.socialIcon}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
