'use client'

const ITEMS = [
  'Laravel', 'Next.js', 'React', 'PHP', 'PostgreSQL', 'Redis',
  'Docker', 'REST APIs', 'Full-Stack Developer', 'Open to Work',
  'TypeScript', 'Tailwind', 'Linux',
]

function Track() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className={
            item === 'Open to Work' || item === 'Full-Stack Developer' ? 'italic' : ''
          }
        >
          {item}
          <span className="star">✦</span>
        </span>
      ))}
    </>
  )
}

export default function HeroMarquee() {
  return (
    <div className="marquee reveal delay-4" aria-hidden="true">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  )
}
