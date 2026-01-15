import { projects } from '@/data/projects';
import ProjectBlock from '@/components/ProjectBlock';

export const metadata = {
    title: "Projects | Personal Website",
};

export default function Projects() {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Projects</h1>
            <div>
                {projects.map((project, index) => (
                    <ProjectBlock key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
