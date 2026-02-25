import { cn } from "@/lib/utils";

export type VisionAIFeature = {
  id: string;
  label: string;
  iconSrc: string;
};

type VisionAIFeatureTracksProps = {
  features: VisionAIFeature[];
  className?: string;
};

function FeatureCard({ label, iconSrc }: { label: string; iconSrc: string }) {
  return (
    <div className="flex shrink-0 items-center gap-4 rounded-2xl bg-card px-5 py-4 shadow-md border border-border/50">
      <img
        src={iconSrc}
        alt={label}
        className="h-12 w-12 object-contain"
      />
      <span className="text-sm font-bold text-foreground whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

function Track({
  features,
  direction = "left",
  duration = 60,
  className,
}: {
  features: VisionAIFeature[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}) {
  const duplicated = [...features, ...features, ...features];
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex gap-6 py-2 w-max"
        style={{
          animation: `platform-track-${direction} ${duration}s linear infinite`,
        }}
      >
        {duplicated.map((f, i) => (
          <FeatureCard key={`${f.id}-${i}`} label={f.label} iconSrc={f.iconSrc} />
        ))}
      </div>
    </div>
  );
}

export function VisionAIFeatureTracks({
  features,
  className,
}: VisionAIFeatureTracksProps) {
  if (features.length === 0) return null;

  const chunk = Math.ceil(features.length / 3);
  const track1 = features.slice(0, chunk);
  const track2 = features.slice(chunk, chunk * 2);
  const track3 = features.slice(chunk * 2);

  return (
    <div className={cn(className)}>
      {/* Desktop: 3 tracks - minimal gap between rows */}
      <div className="hidden md:block space-y-0.5">
        <Track features={track1.length ? track1 : features} direction="left" duration={55} />
        <Track features={track2.length ? track2 : features} direction="right" duration={70} />
        <Track features={track3.length ? track3 : features} direction="left" duration={65} />
      </div>
      {/* Mobile: single track */}
      <div className="md:hidden">
        <Track features={features} direction="left" duration={140} />
      </div>
    </div>
  );
}
