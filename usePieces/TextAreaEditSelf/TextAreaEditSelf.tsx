import { ChangeEvent, TextareaHTMLAttributes, useRef, useEffect, useState } from "react"
import clsx from "clsx"
import { useOnClickOutside } from 'usehooks-ts'
import { Icon } from '@iconify/react'



export type TextAreaEditSelfProps = {
  emitSave?: (event: boolean) => void
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  label: string;
  placeholder: string;
  hint?: string
  errorHint?: string
  countCharacters?: number
  defaultValue?: string | number
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaEditSelf = ({
  hint,
  placeholder,
  errorHint = '',
  label = '',
  name = '',
  rows = 6,
  cols = 30,
  onChange,
  emitSave,
  defaultValue = ''
}: TextAreaEditSelfProps) => {

  const componentRef = useRef(null)
  const [isEditing, setEditingState] = useState(false)

  useEffect(() => {
    setIsEdit(!!errorHint)
  }, [errorHint])

  function setIsEdit(edit: boolean) {
    setEditingState(edit)
  }

  function saveData() {
    if (emitSave) emitSave(true)

    setIsEdit(!!errorHint)
  }

  useOnClickOutside(componentRef, () => setIsEdit(false))

  return (
    <>
      <div className="flex items-center gap-4 max-w-[375px] mb-4 relative h-52" ref={componentRef}>
        {label && <span className="absolute top-0 font-bold">{label}</span>}
        <div className="relative">
          <textarea
            placeholder={placeholder}
            className={clsx(
              `w-auto max-w-[210px] outline-none text-sm font-medium rounded-sm p-2 top-14 resize-none`,
              errorHint?.length ? 'border-error border-2' : '',
              [
                isEditing
                  ? 'bg-white z-20 border-2'
                  : 'bg-transparent placeholder-brand-secondary focus:outline-none cursor-default pl-0',
              ]
            )}
            rows={rows}
            cols={cols}
            name={name}
            defaultValue={defaultValue}
            readOnly={!isEditing}
            onChange={onChange}
          />
          <div arial-label="hint" className="text-brand-secondary text-xs absolute top-14 left-0 mr-2 italic;">
            {errorHint?.length ? (
              <span className="text-red-600 text-sm">{errorHint}</span>
            ) : (
              <span>{isEditing ? hint : ''}</span>
            )}
          </div>
        </div>

        {isEditing ? (
          <button
            type='button'
            aria-label="button-save"
            className="text-brand-light bg-brand-secondary rounded-sm p-2"
            onClick={saveData}
          >
            Save
          </button>
        ) : (
          <button aria-label="button-edit" type='button' onClick={() => setIsEdit(true)}>
            <Icon icon={'bx:edit'} className="cursor-pointer text-2xl" />
          </button>
        )}
      </div>
    </>
  )
}