interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
}

export default function ProjectCard({ title, subtitle, description, gradient }: ProjectCardProps) {
  return (
    <article className="project-card-showcase">
      <div
        className={`aspect-video rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}
      >
        <div className="flex h-full items-end rounded-lg bg-gradient-to-t from-black/40 via-transparent to-transparent p-4">
          <p className="text-lg font-semibold text-white/90">{title}</p>
        </div>
      </div>
      <div className="pt-3">
        <h4 className="text-sm font-semibold text-gray-900">{subtitle}</h4>
        <p className="mt-1 text-xs text-gray-600 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
