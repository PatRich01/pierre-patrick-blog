import { useMemo, useState } from 'react';

const featuredStories = [
  {
    id: 1,
    title: 'The Tactile Renaissance: Why Analog Objects Outlive Algorithms',
    category: 'Craft & Medium',
    author: 'Pierre Patrick',
    readTime: '6 Min Read',
    date: 'Nov 28',
    accent: 'from-orange-500/80 to-amber-400/70',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Shadows and Steel: A Nocturnal Essay on Tokyo\'s Lost Typographic Architecture',
    category: 'Visual Essay',
    author: 'Pierre Patrick',
    readTime: '14 Plates Included',
    date: 'Tokyo Dispatch',
    accent: 'from-pink-500/80 to-orange-400/70',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Slow Computing in a Fast World',
    category: 'Essays',
    author: 'Pierre Patrick',
    readTime: '8 Min Read',
    date: 'Nov 22',
    accent: 'from-emerald-500/70 to-cyan-400/70',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
];

const filters = ['Stories', 'Essays', 'Cinema & Video', 'Dispatches', 'About'];
const authModes = ['Sign in', 'Register', 'Reset'];

function App() {
  const [activeFilter, setActiveFilter] = useState('Stories');
  const [authMode, setAuthMode] = useState('Sign in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const filteredStories = useMemo(() => {
    if (activeFilter === 'Stories') return featuredStories;
    if (activeFilter === 'Essays') return featuredStories.slice(0, 2);
    return featuredStories.slice(1);
  }, [activeFilter]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${authMode} demo submitted for ${email || 'guest'}.`);
  };

  return (
    <div className="min-h-screen bg-[#121417] text-stone-100 antialiased">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#121417]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-lg text-orange-300">P</div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Pierre Patrick</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-stone-400">Journal & Studio</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveFilter(item)}
                className={`text-sm transition ${activeFilter === item ? 'text-orange-300' : 'text-stone-400 hover:text-stone-200'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button className="rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200 transition hover:bg-orange-500/20">
            Subscribe
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1f24] via-[#171b1e] to-[#111317] p-6 shadow-2xl shadow-black/20">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-orange-300">Curated stories</p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">A quieter digital archive.</h1>
                </div>
                <div className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">Live</div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {filteredStories.map((story) => (
                  <article key={story.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className={`h-40 bg-gradient-to-br ${story.accent} p-4`}>
                      <img src={story.image} alt={story.title} className="h-full w-full rounded-xl object-cover grayscale" />
                    </div>
                    <div className="space-y-3 p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-orange-300">{story.category}</div>
                      <h2 className="text-lg font-medium text-white">{story.title}</h2>
                      <div className="flex items-center justify-between text-xs text-stone-400">
                        <span>{story.author}</span>
                        <span>{story.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-[#171b1e] p-6 shadow-2xl shadow-black/20">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Member access</h3>
              <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-stone-300">Secure</div>
            </div>

            <div className="mb-4 flex rounded-full border border-white/10 bg-[#0f1114] p-1">
              {authModes.map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setAuthMode(mode)}
                  className={`flex-1 rounded-full px-4 py-2 text-sm transition ${authMode === mode ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm text-stone-300">
                Email
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d1115] px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-stone-500 focus:border-orange-400"
                />
              </label>

              <label className="block text-sm text-stone-300">
                Password
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d1115] px-4 py-3 text-sm text-white outline-none placeholder:text-stone-500 focus:border-orange-400"
                />
              </label>

              <div className="flex items-center justify-between text-xs text-stone-400">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/20 bg-[#0d1115]" />
                  Remember me
                </label>
                <button type="button" className="text-orange-300 hover:text-orange-200">
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
                {authMode}
              </button>
            </form>
          </aside>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {['Design system', 'Authentication flows', 'React components'].map((label, index) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-[#171b1e] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-orange-300">0{index + 1}</div>
              <h3 className="mb-3 text-xl font-semibold text-white">{label}</h3>
              <p className="text-sm text-stone-400">
                Build polished experiences with React state, modular UI patterns, and secure authentication-ready layouts.
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
