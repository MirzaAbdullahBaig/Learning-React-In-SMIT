function Button({ label, borderColor, bgColor, textColor }) {
  return (
    <button
      className={` 
        ${borderColor ? borderColor : "border-blue-500"}
        ${bgColor ? bgColor : "bg-slate-200"}
        ${textColor ? textColor : "text-yellow-600"}
        border rounded-md p-3 m-4
        `}
    >
      {label}
    </button>
  );
}

export default Button;
