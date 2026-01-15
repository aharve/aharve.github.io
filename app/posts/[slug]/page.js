import { getPostBySlug, getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdown';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title']);
    if (!post) {
        return { title: 'Post Not Found' };
    }
    return {
        title: `${post.title} | Arnav Harve`,
    };
}

export default async function Post({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, [
        'title',
        'date',
        'slug',
        'content',
    ]);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || '');

    return (
        <article>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{post.title}</h1>
            <div style={{ color: '#666', marginBottom: '2rem' }}>
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </div>
            <div
                style={{ lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
}
