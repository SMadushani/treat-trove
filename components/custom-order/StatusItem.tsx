import { FiCheckCircle } from "react-icons/fi";

interface StatusItemProps {
  title: string;
  value: string;
}

export default function StatusItem({
  title,
  value,
}: StatusItemProps) {
  const completed = value !== "";

  return (
    <div className="text-center">
      <p className="text-sm text-gray-700">{title}</p>

      {completed ? (
        <>
          <FiCheckCircle className="mx-auto mt-1 text-xl text-green-600" />
          <p className="mt-1 text-xs text-green-600">{value}</p>
        </>
      ) : (
        <>
          <div className="mx-auto mt-1 h-5 w-5 rounded-full border-2 border-gray-300" />
          <p className="mt-1 text-xs text-gray-400">Waiting</p>
        </>
      )}
    </div>
  );
}