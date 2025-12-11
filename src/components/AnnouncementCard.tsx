import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AnnouncementCardProps {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  isNew?: boolean;
}

export function AnnouncementCard({ title, excerpt, date, href, isNew }: AnnouncementCardProps) {
  return (
    <Link
      to={href}
      className="group flex flex-col p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <CalendarDays className="h-4 w-4" />
          {date}
        </div>
        {isNew && (
          <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
            New
          </span>
        )}
      </div>
      
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
        {excerpt}
      </p>
      
      <div className="flex items-center gap-2 mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Read More
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
