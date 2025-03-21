interface ProgressBarProps {
    progress: number;
}

export const ProgressBarComponent: React.FC<ProgressBarProps> = ({ progress }) => {
    const baseColor = progress <= 50 ? 'bg-red-500' : 'bg-secondary';
    const mutedColor = progress <= 50 ? 'bg-red-500/50' : 'bg-secondary/50';

    return (
        <div className="flex flex-col items-start">
            <span className="text-tertiary font-medium mb-1">{progress}%</span>
            <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden relative">
                <div
                    className={`h-full ${baseColor} absolute left-0 top-0`}
                    style={{ width: `${progress}%` }}
                ></div>
                <div
                    className={`h-full ${mutedColor} absolute left-0 top-0`}
                    style={{ width: `${100 - progress}%`, left: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};