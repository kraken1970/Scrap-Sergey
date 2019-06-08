import React from "react";
import HeadLineBlock from "../HeadLineBlock";
import ArticlePreviewCard from "../cards/ArticlePreviewCard";
import ArticlePostCard from "../cards/ArticlePostCard";
import PhotoPreviewCard from "../cards/PhotoPreviewCard";
import VideoPreviewCard from "../cards/VideoPreviewCard";
import VideoPostCard from "../cards/VideoPostCard";
import PollCard from "../cards/PollCard";
import PreviewItemList from "../PreviewItemList";

import classNames from "classnames";
import styles from "./homePageLayout.module.scss";

import {
  articleCardData,
  videoCardData,
  photoCardsArray,
  videoCardsArray,
  pollCardsArray,
  articleCardsArray
} from "../../TEMPORARY/data";

const HomePageLayout = () => {
  return (
    <main className={classNames("mainWrapper", styles.homePageLayout)}>
      <div className="mainContent">
        <section className={styles.pageSection}>
          <HeadLineBlock name="Sportlight" link="All articles" />

          <ArticlePostCard cardData={articleCardData} />
        </section>

        <section className={styles.pageSection}>
          <HeadLineBlock name="Top Photos" link="All photos" />

          <PreviewItemList
            cardsItems={photoCardsArray}
            Card={PhotoPreviewCard}
          />
        </section>

        <section className={styles.pageSection}>
          <HeadLineBlock name="Top Videos" link="All videos" />

          <VideoPostCard cardData={videoCardData} />
        </section>

        <section className={styles.pageSection}>
          <HeadLineBlock name="Top Articles" link="All articles" />

          <ArticlePostCard cardData={articleCardData} />
        </section>

        <section className={styles.pageSection}>
          <HeadLineBlock
            name="Poll: Who are the athletes playing tennis?"
            link="All polls"
          />

          <PreviewItemList cardsItems={pollCardsArray} Card={PollCard} />
        </section>

        <section className={styles.pageSection}>
          <HeadLineBlock name="Videos showcase" link="All videos" />
          <div className={styles.cardPost}>
            <PreviewItemList
              cardsItems={videoCardsArray}
              Card={VideoPreviewCard}
            />
          </div>
        </section>

        <section className={styles.pageSection}>
          <HeadLineBlock name="Photos showcase" link="All photos" />
          <div className={styles.cardPost}>
            <PreviewItemList
              cardsItems={photoCardsArray}
              Card={PhotoPreviewCard}
            />
          </div>
        </section>

        <section className={styles.pageSection}>
          <HeadLineBlock name="Articles showcase" link="All articles" />
          <div className={styles.cardPost}>
            <PreviewItemList
              cardsItems={articleCardsArray}
              Card={ArticlePreviewCard}
            />
          </div>
        </section>
      </div>

      <aside className="asideContent">
        <p>aside</p>
      </aside>
    </main>
  );
};

export default HomePageLayout;
