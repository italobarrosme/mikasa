import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { useRef, useState, InputHTMLAttributes, useEffect } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export type TextEditSelfProps = {
  emitSave?: (event: boolean) => void
  hint?: string
  errorHint?: string
  countCharacters?: number
  label?: string
  defaultValue?: string | number
} & InputHTMLAttributes<HTMLInputElement>

export const TextEditSelf = ({
  defaultValue = '',
  hint,
  placeholder,
  errorHint = '',
  label = '',
  name = '',
  type = 'text',
  onChange,
  emitSave,
  countCharacters: countCharacters = 20,
  ...props
}: TextEditSelfProps) => {
  const [isEditing, setEditingState] = useState(false)
  const componentRef = useRef(null)

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
      <div {...props} className="flex items-center gap-4 max-w-[375px] mb-4 relative h-24" ref={componentRef}>
        {label && <span className="absolute bottom-20 font-bold">{label}</span>}
        <div className="relative">
          <input
            type={type}
            min={type === 'number' ? 0 : undefined}
            placeholder={placeholder}
            className={clsx(
              'input',
              'w-auto max-w-[210px] h-10 outline-none text-sm font-medium rounded-sm relative px-2',
              errorHint?.length ? 'border-error border-2' : '',
              countCharacters > 20 ? 'min-w-[320px]' : '',
              [
                isEditing
                  ? 'bg-white border-2'
                  : 'bg-transparent placeholder-inherit focus:outline-none cursor-default pl-0',
              ]
            )}
            name={name}
            defaultValue={defaultValue}
            readOnly={!isEditing}
            onChange={onChange}
          />
          <div arial-label="hint" className="text-xs absolute top-14 left-0 mr-2 italic;">
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