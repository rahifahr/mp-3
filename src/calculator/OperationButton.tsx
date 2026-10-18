interface OperationButtonProps {
    label: string;
    onClick: () => void;
}

export default function OperationButton({ label, onClick }: OperationButtonProps) {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>
    );
}