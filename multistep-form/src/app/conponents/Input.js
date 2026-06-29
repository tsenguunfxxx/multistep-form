const Input = (props, type) => {
  const handleOnchange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <label className="text-black text-[14px]">
        {props.title} <span className="text-red-500">*</span>
      </label>
      <input
        onChange={handleOnchange}
        type={props.type}
        placeholder="Placeholder"
        className="flex p-3 items-center rounded-lg border-solid border-2  w-[416] text-black"
      />
    </div>
  );
};
export default Input;
