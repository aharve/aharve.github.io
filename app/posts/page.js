import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/PostPreview';

export const metadata = {
    title: "All Posts | Personal Website",
};

export default function Posts() {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Writing</h1>
            {allPosts.map((post) => (
                <PostPreview key={post.slug} {...post} />
            ))}
        </div>
    );
}
