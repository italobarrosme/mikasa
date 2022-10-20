import { ChangeEvent } from "react"


export type TextAreaEditSelfProps = {
  value: string;
  name: string;
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;



export const TextAreaEditSelf = ({ value, name, label, placeholder, ...props }: TextAreaEditSelfProps) => (
  <>
    <div>
      <label htmlFor="bio" className="text-sm"></label>
      <textarea placeholder={placeholder} className="w-full"></textarea>
    </div>
  </>
)