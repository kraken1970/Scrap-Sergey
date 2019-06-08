import React from "react";
import classNames from "classnames";
import styles from "./emailSubscriptionForm.module.scss";

const EmailSubscriptionForm = () => {
  return (
    <form className={styles.footerForm}>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        className={styles.emailInput}
      />
      <button className={classNames("btnSubscribe")}>Subscribe</button>
    </form>
  );
};

export default EmailSubscriptionForm;
