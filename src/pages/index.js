import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import EducationBackground from '../components/EducationBackground/EducationBackground';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import SocialWork from '../components/SocialWork/SocialWork';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import WorkingBackground from '../components/WorkingBackground/WorkingBackground';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <EducationBackground/>
      <WorkingBackground/>
      <Acomplishments />
      <SocialWork/>
    </Layout>
  );
};

export default Home;
