'use client';

export default function ProjectBlock({ title, description, link, year }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit', marginBottom: '2rem' }}>
            <div style={{ border: '1px solid #d4cbb8', padding: '1.5rem', borderRadius: '4px', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ebe3cf'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h3>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>{year}</span>
                </div>
                <p style={{ margin: 0 }}>{description}</p>
            </div>
        </a>
    );
}
