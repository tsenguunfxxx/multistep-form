const Input = (props, type) => {
  return (
    <div>
      <label className="text-black text-[14px]">
        {props.title} <span className="text-red-500">*</span>
      </label>
      <input
        type={props.type}
        placeholder="Placeholder"
        className="flex p-3 items-center rounded-lg border-solid border-2  w-[416]"
      />
    </div>
  );
};
export default Input;
