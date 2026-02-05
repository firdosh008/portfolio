import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import animartLarge from '~/assets/animartLarge.jpg';
import animart2Large from '~/assets/animartLarge2.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.png';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import llmControls from '~/assets/llm_controls.png';
import yummyImage from '~/assets/yummy.png';
import yummy2Image from '~/assets/yummy2.png';
import objsImage from '~/assets/objs.png';
import flatlineImage from '~/assets/flatline.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { ProjectSummary } from '../home/project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './projects.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects - Full-Stack Developer',
    description: `All projects by ${config.name} — showcasing full-stack web apps, AI platforms, and blockchain solutions.`,
  });
};

export const Projects = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();

  useEffect(() => {
    const sections = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.projects}>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Preplix"
        description="Designed and developed a scalable online learning platform for higher education using Next.js, featuring real-time progress tracking and interactive course management"
        buttonText="View Website"
        buttonLink="https://preplix.com/"
        model={{
          type: 'laptop',
          alt: 'Preplix learning platform',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTexture} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="FlexiPaisa"
        description="Built a production-grade lending services mobile application using React Native, serving business entities and MSME employees with secure loan management and real-time tracking"
        buttonText="View on Play Store"
        buttonLink="https://play.google.com/store/apps/details?id=com.madhurinstalments.flexipaisa&hl=en_IN"
        model={{
          type: 'phone',
          alt: 'FlexiPaisa mobile app',
          textures: [
            {
              srcSet: `${gamestackTextureLarge} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2Large} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="LLM Controls"
        description="Built an advanced AI control platform for managing and monitoring large language models with real-time analytics, prompt optimization, and security controls"
        buttonText="View Website"
        buttonLink="https://app.llmcontrols.ai/"
        model={{
          type: 'laptop',
          alt: 'LLM Controls platform',
          textures: [
            {
              srcSet: `${llmControls} 800w, ${llmControls} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Anymart"
        description="Built a secure, scalable e-commerce platform using MERN stack with features including payment integration, order management, and real-time inventory tracking"
        buttonText="View Website"
        buttonLink="https://anymart.onrender.com/"
        model={{
          type: 'phone',
          alt: 'Anymart e-commerce app',
          textures: [
            {
              srcSet: `${animartLarge} 375w, ${animartLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${animart2Large} 375w, ${animart2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="The Crazy Mountaineers"
        description="Designed and developed a dynamic travel agency platform with integrated booking system, payment gateway, and admin dashboard for tour package management"
        buttonText="View Website"
        buttonLink="https://thecrazymountaineers.com/"
        model={{
          type: 'laptop',
          alt: 'The Crazy Mountaineers travel platform',
          textures: [
            {
              srcSet: `${sliceTextureLarge} 1280w, ${sliceTextureLarge} 2560w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Yumy"
        description="Developed a full-featured food ordering platform with restaurant management, real-time order tracking, and integrated payment solutions using MERN stack"
        buttonText="View Website"
        buttonLink="https://yumy.onrender.com/"
        model={{
          type: 'phone',
          alt: 'Yumy food ordering app',
          textures: [
            {
              srcSet: `${yummyImage} 375w, ${yummyImage} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${yummy2Image} 375w, ${yummy2Image} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Objs"
        description="Worked with Objs.ai, an AI-driven workspace platform that converts uploaded files into semantic vector representations so users can interact with their content conversationally. The service processes documents (such as PDFs, notes, and other data), generates embedding vectors, and enables powerful search and question-answering over the file content with context-aware responses, rich previews, and markdown-formatted answers — helping build AI apps that make files easily understandable and actionable."
        buttonText="View Website"
        buttonLink="https://objs.ai/"
        model={{
          type: 'laptop',
          alt: 'Objs analytics platform',
          textures: [
            {
              srcSet: `${objsImage} 800w, ${objsImage} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};

