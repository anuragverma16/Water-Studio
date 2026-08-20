import { Target, TrendingUp, Users, Zap } from 'lucide-react';
import type { ReactNode } from 'react';

const approachSteps: { num: string; title: string; text: string; icon: ReactNode }[] = [
  { num: '01', title: 'Listen first', text: 'Every project starts with understanding the real need.', icon: <Users size={24} /> },
  { num: '02', title: 'Design with intent', text: 'We plan the details before we execute, so quality is built in from the start.', icon: <Target size={24} /> },
  { num: '03', title: 'Deliver consistently', text: 'Reliability is the promise. What we deliver once, we deliver every time.', icon: <Zap size={24} /> },
  { num: '04', title: 'Improve always', text: 'We treat every delivery as feedback, and every feedback as a chance to grow.', icon: <TrendingUp size={24} /> },
];

export function Approach() {
  return (
    <section className="approach-section section-pad" id="approach">
      <div className="section-kicker reveal-on-scroll">05 / How we work</div>
      <h2 className="section-title reveal-on-scroll">A simple <span>process,</span><br />done <i>seriously.</i></h2>
      <div className="approach-grid">
        {approachSteps.map((step, i) => (
          <article className="approach-card reveal-on-scroll" key={step.num} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="approach-icon">{step.icon}</div>
            <span className="approach-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
