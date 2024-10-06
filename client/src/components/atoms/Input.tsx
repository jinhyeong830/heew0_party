interface Props {
  placeholder?: string;
  className?: string;
  onChange?: () => void;
}

export default function InputText({ placeholder, className, onChange }: Props) {
  return <input type="text" onChange={onChange} className={className} placeholder={placeholder} />;
}
