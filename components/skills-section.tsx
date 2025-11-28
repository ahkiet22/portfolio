import { Divider } from "./Divider";
import SkillsMarquee from "./SkillsInfiniteScroll";

export const SkillsSection = () => {
  return (
    <section className="skills-section mb-20">
      <h2 className="text-4xl text-center mb-6">My Skills</h2>
      <Divider />
      <SkillsMarquee />
    </section>
  );
};
