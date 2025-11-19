import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

function Card({ item }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400/40 transition">
      <div className="aspect-[4/5] overflow-hidden bg-slate-800">
        <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-white font-semibold truncate">{item.title}</h3>
          {item.price ? (
            <span className="text-sm text-cyan-300">${item.price.toFixed(2)}</span>
          ) : null}
        </div>
        <p className="mt-1 text-sm text-slate-300/80 line-clamp-2">{item.description}</p>
        {item.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-slate-200">{t}</span>
            ))}
          </div>
        ) : null}
        <div className="mt-3 flex items-center justify-between">
          <a
            href={item.marketplace_url || '#'}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-cyan-300 hover:text-white hover:underline"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/designs`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  // Fallback sample content if no backend data
  const content = items.length ? items : [
    {
      title: 'Cyber Wave Tee',
      description: 'Vibrant neon wave with glitch accents. Perfect for tech lovers.',
      image_url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      marketplace_url: '#',
      tags: ['cyber', 'neon', 'glitch'],
      price: 19.99,
    },
    {
      title: 'Retro Sunset',
      description: '80s synthwave sunset with grid landscape and soft grain.',
      image_url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      marketplace_url: '#',
      tags: ['synthwave', 'sunset', 'retro'],
      price: 17.49,
    },
    {
      title: 'Minimal Line Art',
      description: 'Clean one-line illustration for an elegant everyday look.',
      image_url: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200&auto=format&fit=crop',
      marketplace_url: '#',
      tags: ['minimal', 'lineart', 'elegant'],
      price: 16.00,
    },
    {
      title: 'Space Explorer',
      description: 'Playful astronaut floating through a candy-colored galaxy.',
      image_url: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1200&auto=format&fit=crop',
      marketplace_url: '#',
      tags: ['space', 'astronaut', 'galaxy'],
      price: 18.25,
    },
  ]

  return (
    <section id="gallery" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Designs</h2>
            <p className="text-slate-300/80 mt-2">Interactive previews, smooth hover effects, and direct links to your listings.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 bg-white/10 rounded-lg text-white border border-white/10 hover:bg-white/15">Request Custom</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {content.map((it, idx) => (
            <Card key={idx} item={it} />
          ))}
        </div>
      </div>
    </section>
  )
}
