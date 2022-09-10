import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { useRef, useState, InputHTMLAttributes, useEffect } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import style from './TextEditSelf.module.scss'
import { ChangeEvent } from 'react'

export type TextEditSelfProps = {
  emitSave?: (event: boolean) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  hint?: string
  errorHint?: string
  countCharacters?: number
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextEditSelf = ({
  defaultValue,
  hint,
  placeholder,
  errorHint = '',
  label = '',
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
      <div {...props} className={style.component} ref={componentRef}>
        {label && <span className={clsx(style.label)}>{label}</span>}
        <div className={style.contentInput}>
          <input
            type="text"
            placeholder={placeholder}
            className={clsx(
              'input',
              style.inputFormEdit,
              errorHint?.length ? 'border-error border-2' : '',
              countCharacters > 20 ? 'min-w-[320px]' : '',
              [
                isEditing
                  ? 'bg-white'
                  : 'bg-transparent focus:outline-none cursor-default pl-0',
              ]
            )}
            defaultValue={defaultValue}
            readOnly={!isEditing}
            onChange={onChange}
          />
          <div arial-label="hint" className={style.inputHint}>
            {errorHint?.length ? (
              <span className={style.errorHint}>{errorHint}</span>
            ) : (
              <span>{isEditing ? hint : ''}</span>
            )}
          </div>
        </div>

        {isEditing ? (
          <button
            aria-label="button-save"
            className={style.buttonSave}
            onClick={saveData}
          >
            Save
          </button>
        ) : (
          <button aria-label="button-edit" onClick={() => setIsEdit(true)}>
            <Icon icon={'bx:edit'} className={clsx(style.iconEdit)} />
          </button>
        )}
      </div>
    </>
  )
}