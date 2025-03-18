import imgLoader from '../../assets/UIDashboard/loaders/loader.gif'

export const LoaderComponent: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-40" style={{ backgroundColor: '#f5f6fa' }}>
            <img
                src={imgLoader}
                alt="Loading..."
                style={{ width: 250, height: 250 }}
            />
        </div>
    );
};