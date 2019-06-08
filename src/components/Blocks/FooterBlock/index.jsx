import React from "react";
import EmailSubscriptionForm from "../../Forms/EmailSubscriptionForm";

import classNames from "classnames";
import styles from "./footerBlock.module.scss";

const list01 = ["About", "Sportlight", "Contact"];
const list02 = ["Scrapbook", "Resources", "Help & FAQ"];
const list03 = ["Advertising", "Terms of use", "Privacy Policy"];

const listMenu = element => {
  return element.map((item, index) => {
    return (
      <li key={index} className={styles.menuList}>
        <a href="localhost:3000" className={styles.menuLink}>
          {item}
        </a>
      </li>
    );
  });
};

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
              <div className={styles.menuGroup01}>
                <ul className={styles.groupItems}>{listMenu(list01)}</ul>
              </div>

              <div className={styles.menuGroup02}>
                <ul className={styles.groupItems}>{listMenu(list02)}</ul>
              </div>

              <div className={styles.menuGroup03}>
                <ul className={styles.groupItems}>{listMenu(list03)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
