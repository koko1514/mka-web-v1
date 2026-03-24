interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  textarea?: boolean;
}

const FormField = (props: FormFieldProps) => {
  const { label, type = "text", name, placeholder, textarea = false } = props;

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-black mb-1"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={5}
          className="w-full border border-gray-300 rounded-xl p-2 focus:ring-primary focus:border-primary"
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-xl p-2 focus:ring-primary focus:border-primary"
        />
      )}
    </div>
  );
};

export default FormField;
