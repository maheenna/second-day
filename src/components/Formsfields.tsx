import Image from "next/image";

// Define props type for FormField component

interface FormFieldProps {
    imageSrc: string;
    placeholderText: string;
  }

  // FormField component as a functional component

const FormField: React.FC<FormFieldProps> = ({ imageSrc, placeholderText }) => {
    return (
      <div className="mt-5 mr-4">
        <div className="border-2 pl-3 rounded-md py-2 flex gap-4">
          <Image src={imageSrc} alt="flight" height={200} width={200} className="w-[16px] h-[16px]" />
          {/* Apply custom styles to input */}
          <input
            type="text"
            placeholder={placeholderText}
            className="focus:outline-none border-none focus:border-transparent"
          />
        </div>
      </div>
    );
  };

  export default FormField