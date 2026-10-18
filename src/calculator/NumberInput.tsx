interface NumberInputProps {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export default function NumberInput({ id, label, placeholder, value, onChange }: NumberInputProps) {
    return (
        <>
            <label htmlFor={id} className="visually-hidden">{label}</label>
            <input
                type="number"
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    );
}