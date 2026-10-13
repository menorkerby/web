import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export const Services: React.FC = () => {
  const { ref, inView } = useInView(0.08);
  const [featured, ...rest] = services;

  return (
    <section
      id="services"
      className="py-[100px] lg:py-[130px]"
      aria-labelledby="services-heading"
    >
      <Container>
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <SectionHeading
            eyebrow="What We Do"
            headline="Good ideas deserve great execution."
            description="The right digital tools can make a big difference. We focus on useful solutions, strong design, and a smoother experience from start to finish."
          />
        </div>

        {/* Bento grid: featured left (tall) + 3 smaller on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured card — spans full height in the first column */}
          <div
            className={`lg:row-span-2 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="h-full">
              <ServiceCard service={featured} featured />
            </div>
          </div>

          {/* Three remaining cards */}
          {rest.map((service, idx) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: inView ? `${(idx + 2) * 100}ms` : '0ms' }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
