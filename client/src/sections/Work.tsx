import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectConceptCard } from '../components/ProjectConceptCard';
import { concepts } from '../data/concepts';
import { siteConfig } from '../config/site';

export const Work: React.FC = () => {
  if (!siteConfig.showConceptGallery) return null;

  return (
    <section
      id="work"
      className="py-[100px] lg:py-[130px] bg-bg-elevated"
      aria-labelledby="work-heading"
    >
      <Container>
        <div className="mb-14">
          <SectionHeading
            eyebrow="Ideas in Action"
            headline="A glimpse of what we can build."
            description="Explore sample directions for the kinds of digital experiences CodeMerge can create."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {concepts.map((concept) => (
            <ProjectConceptCard key={concept.id} concept={concept} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[12px] text-text-muted">
          All items shown are original concept previews created by CodeMerge.
          They are not client deliverables or paid projects.
        </p>
      </Container>
    </section>
  );
};
