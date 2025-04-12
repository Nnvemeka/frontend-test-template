import { useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

interface ModalProps {
  onClose: () => void;
  addAppointMent: () => void;
}

const AppointmentActionModal = ({ addAppointMent, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div
      ref={modalRef}
      className="absolute flex items-center justify-center z-50"
    >
      <div className="bg-white rounded shadow-md max-w-md w-full relative">
        <div className="flex flex-col gap-1 py-2 px-1">
          <button
            onClick={addAppointMent}
            className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-sm cursor-pointer"
          >
            <FaPlus className="text-gray-600" />
            <h4>Add appointment</h4>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-sm cursor-pointer">
            <MdOutlineDateRange className="text-gray-600" />
            <h4>Set availability</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentActionModal;
