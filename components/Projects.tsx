import { PropertyCards } from '@/components/PropertyCards';
import { ProjectsHeading } from '@/components/ProjectsHeading';
import { getProperties } from '@/lib/data';

export async function Projects() {
  const properties = await getProperties();

  return (
    <section id="projects" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <ProjectsHeading />
        <PropertyCards properties={properties} />
      </div>
    </section>
  );
}
