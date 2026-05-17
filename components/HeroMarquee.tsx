'use client'

const ITEMS = [
  'PHP', 'Laravel', 'Wordpress', 'MySQL', 'PostgreSQL', 'Redis',
  'Javascript', 'TypeScript', 'Tailwind', 'React', 'Next.js',
  'Git', 'Linux', 'Docker', 'REST APIs', 'Golang'
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
