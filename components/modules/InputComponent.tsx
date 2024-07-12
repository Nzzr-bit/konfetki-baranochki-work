export const InputComponent: React.FC<{
  type: string;
  placeholder: string;
  register: any;
  error: any;
}> = ({ type, placeholder, register, error }) => (
  <div className="mb-5">
    <input
      type={type}
      className={`p-2 border-2 rounded-md w-full ${
        error ? "border-red-500" : ""
      }`}
      placeholder={placeholder}
      {...register}
    />
    {error && (
      <span className="text-red-500 text-sm">
        Поле обязательно для заполнения
      </span>
    )}
  </div>
);
