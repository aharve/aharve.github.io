import Link from 'next/link';
import { getAllPosts } from '@/lib/api';
import { projects } from '@/data/projects';
import PostPreview from '@/components/PostPreview';
import ProjectBlock from '@/components/ProjectBlock';

export default function Home() {
  // Get recent 3 posts
  const recentPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']).slice(0, 3);
  // Get recent 3 projects
  const recentProjects = projects.slice(0, 3);

  return (
    <div>
      <section style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hello!</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          I'm Arnav Harve, a current third-year undergraduate at the University of Chicago. I'm curious about virtually everything,
          with particular interests in emerging technologies, politics and policy, and China. Please enjoy some of my writing below,
          and feel free to reach out!
        </p>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0 }}>Recent Writing</h2>
          <Link href="/posts">View all</Link>
        </div>
        {recentPosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0 }}>Recent Projects</h2>
          <Link href="/projects">View all</Link>
        </div>
        {recentProjects.map((project, index) => (
          <ProjectBlock key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
