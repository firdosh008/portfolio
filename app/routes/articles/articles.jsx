import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from '~/hooks';
import { Link as RouterLink } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { formatDate } from '~/utils/date';
import { classes, cssProps } from '~/utils/style';
import styles from './articles.module.css';

const jsonData = [
  {
    "title": "Multi object Tracking System",
    "abstract": "Presented a multi-object tracking system with MOTA score of 78.1 at the IEEE GCAT conference, under guidance of professor Akash Chauhan.",
    "date": "2024-02-01",
    "end": "2024-04-30",
    "banner": "/static/modern-styling-in-react-banner.jpg",
    "featured": true
  },
  {
    "title": "One for life",
    "abstract": "Designed scalable solutions in a multinational team, improving UI/UX and API integration for enhanced user experience and security.",
    "date": "2023-12-09",
    "end": "2024-01-12",
    "banner": "/static/hello-world-banner.jpg",
    "featured": false
  }
];

function ArticlesPost({ frontmatter, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, end, featured, banner } = frontmatter;

  useEffect(() => {
    setDateTime(formatDate(date));
    setDateEnd(formatDate(end));
  }, [date, end]);

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          Featured
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={banner}
            placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <RouterLink className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {dateTime}
          </div>
          <Heading as="h2" level={featured ? 2 : 4}>
            {title}
          </Heading>
          <Text size={featured ? 'l' : 's'} as="p">
            {abstract}
          </Text>
          <div className={styles.postFooter}>
            <Text className={styles.timecode} size="s">
              {dateEnd}
            </Text>
          </div>
        </div>
      </RouterLink>
    </article>
  );
}

function SkeletonPost() {
  return (
    <article className={classes(styles.post, styles.skeleton)}>
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>July 01, 2025</div>
          <Heading className={styles.skeletonBone} as="h2" level={4} style={{ height: 24, width: '70%' }} />
          <Text className={styles.skeletonBone} size="s" as="p" style={{ height: 90, width: '100%' }} />
          <div className={styles.postFooter}>
            <Text className={styles.timecode} size="s">MM DD, YY -</Text>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const featuredPostData = jsonData.find((post) => post.featured);
  const postsData = jsonData.filter((post) => !post.featured);

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        Latest Experience
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      {postsData.map((post, index) => (
        <ArticlesPost key={index} index={index} frontmatter={post} />
      ))}
      <SkeletonPost />
    </div>
  );

  const featuredPost = featuredPostData ? <ArticlesPost frontmatter={featuredPostData} /> : <SkeletonPost />;

  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        {!isSingleColumn ? (
          <div className={styles.grid}>
            {postList}
            {featuredPost}
          </div>
        ) : (
          <div className={styles.grid}>
            {postsHeader}
            {featuredPost}
            {postList}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
}