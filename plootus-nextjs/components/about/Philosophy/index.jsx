import React, { useEffect } from 'react';
import styles from './Philosophy.module.css';

const Philosophy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={styles.gapper} />
      <div className={styles.main}>
        <div className={styles.textContent}>
          <h1 className={styles.philoH1}>Vision</h1>
          <p className={styles.philoP}>
            Revive the American dream and offer stress-free financial planning
            to everyone
          </p>
        </div>
        <div className={styles.imageContent}>
          <img
            src="/philosophy.svg"
            alt="Retirement Is the most important asset for an average american get your advice free here"
            className={styles.img}
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.mainphilosophy}>
        <h1 className={styles.philoH2}>Our Philosophy</h1>
        <div className={styles.ulTag}>
          <ul>
            <li className={styles.ulItem}>
              <div className={styles.squareP}>
                <div className={styles.square} />
              </div>
              <div className={styles.ptagP}>
                <h4 className={styles.ulH4}>
                  Democratize financial planning for all
                </h4>
                <p>
                  For an average user, financial planning can be extremely
                  stressful and understanding various investment options ends up
                  being a time consuming & head-scratching exercise. These days,
                  most employers offer defined contribution type plan benefits
                  like 401k or 403b plans instead of an assured pension amount
                  at the time of retirement. These plans allow discretion in the
                  investment of funds making the returns variable and subject to
                  market risks. Plan resources and employer education
                  initiatives do not provide sufficient tools to make educated &
                  informed decisions about investments. Whether you are heading
                  off into the sunset, are a mid-level professional or just
                  starting your career, we help you identify your current
                  requirements and future goals in the context of multiple
                  drivers & life cycle changes such as marriage, children,
                  increased healthcare cost, home expenses, risk tolerance and
                  recommend the investments that will guide you through a happy
                  retirement.
                </p>
              </div>
            </li>

            <li className={styles.ulItem}>
              <div className={styles.squareP}>
                <div className={styles.square} />
              </div>
              <div className={styles.ptagP}>
                <h4 className={styles.ulH4}>
                  Technology enabled, expert financial advice, yet does not
                  break your bank
                </h4>
                <p>
                  Technology promises accuracy, transparency, and efficiency. By
                  linking your financial accounts in a secure way, Plootus can
                  obtain transactional information and understand your financial
                  profile. Our algorithm analyzes your income and expenses and
                  predicts future requirements during retirement. We do not sell
                  you anything that is agnostic to the fund options available
                  through your employer-sponsored plans. After carefully
                  considering your needs and profile, we will choose the best
                  funds in your 401k 403b plans, with the lowest fees and better
                  performance. Security & confidentiality of your data is our
                  first priority. We have meticulously implemented sufficient
                  levels of encryption in place and good practices that
                  guarantee confidentiality. We do not ask for personal
                  information, date of birth or Social Security Numbers. Your
                  login IDs and passwords for any financial institution are
                  never seen or stored by Plootus. Our services are read-only
                  and do not allow us to execute any actions/transactions on
                  your behalf such as changing investment options for your 401k
                  plan. We provide you the best recommendation but let you be
                  the ultimate decision maker to make the changes by accessing
                  your account. Plootus is currently available at no cost for
                  patrons, whether your 401k, 403b or similar account size is $1
                  or in $1 million.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
