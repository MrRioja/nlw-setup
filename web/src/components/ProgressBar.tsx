interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-valuenow={progress}
        style={{ width: `${progress}%` }}
        aria-label="Progresso de hábitos completados nesse dia"
        className="h-3 rounded-xl bg-violet-600 transition-all"
      />
    </div>
  );
}
