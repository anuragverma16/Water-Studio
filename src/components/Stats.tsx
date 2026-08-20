const stats = [
  { value: '02', label: 'ventures, one standard', sub: 'Water + Frames' },
  { value: '100%', label: 'owner-led craft', sub: 'No shortcuts' },
  { value: '2024', label: 'founded in Burdwan', sub: 'West Bengal' },
  { value: '∞', label: 'moments worth keeping', sub: "That's the point" },
];

export function Stats() {
  return (
    <section className="stats-section section-pad">
      <div className="section-kicker reveal-on-scroll">02 / By the numbers</div>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card reveal-on-scroll" key={s.label} style={{ transitionDelay: `${i * 0.1}s` }}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
            <em>{s.sub}</em>
          </div>
        ))}
      </div>
    </section>
  );
}
