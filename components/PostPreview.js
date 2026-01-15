import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function PostPreview({ title, date, excerpt, slug }) {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                <Link href={`/posts/${slug}`} style={{ textDecoration: 'none' }}>
                    {title}
                </Link>
            </h3>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
                {format(parseISO(date), 'LLLL d, yyyy')}
            </div>
            <p style={{ margin: 0 }}>{excerpt}</p>
        </div>
    );
}
