interface Props {
  title: string;
  type: "button" | "submit";
  onClickBtn?: () => void;
}

const Button = ({ title, type, onClickBtn }: Props) => {
  return (
    <button
      type={type}
      className="flex justify-center w-full bg-slate-400 hover:bg-slate-500 p-2 rounded-md hover:text-white"
      onClick={onClickBtn}
    >
      <p className="font-medium text-lg">{title}</p>
    </button>
  );
};

export default Button;
