export function HeroBadges() {
  const items = ["Systèmes", "Analyse", "Web", "Données", "Collaboration"];
  return <div className="tag-row">{items.map((item) => <span key={item} className="tag">{item}</span>)}</div>;
}
