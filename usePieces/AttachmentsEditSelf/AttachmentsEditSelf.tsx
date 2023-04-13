import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { useRef, useState, InputHTMLAttributes, useEffect, ChangeEvent } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import styles from './AttachmentsEditSelf.module.scss'

export type AttachmentsEditSelfProps = {
  emitSave?: (event: boolean) => void
  fileData?: File | null
  hint?: string
  errorHint?: string
  label?: string
  attachmentText?: string
} & InputHTMLAttributes<HTMLInputElement>

export const AttachmentsEditSelf = ({
  defaultValue,
  hint,
  placeholder,
  errorHint = '',
  label = '',
  name = '',
  attachmentText = 'Attach file',
  fileData,
  onChange,
  emitSave,
  ...props
}: AttachmentsEditSelfProps) => {
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
        <div className="relative truncate">
          {isEditing && <div className={styles['content__label']}>
            <label className={clsx(styles['label'], [isEditing && !fileData ? '' : 'hidden'])} htmlFor={name}>
              {attachmentText}
            </label>
            <label className={clsx(styles['label'], [isEditing && fileData ? '' : 'hidden'])} htmlFor={name}>
              <span className="truncate">{fileData?.name}</span>
            </label>
          </div>}
          <span>
            {!isEditing &&
              <p className='flex items-center w-auto max-w-[210px] h-10 outline-none text-sm font-medium rounded-sm truncate'>
                {fileData ? fileData.name : placeholder}
              </p>}
          </span>
          <input
            type="file"
            placeholder={placeholder}
            id={name}
            className={clsx(
              styles['input__file'],
              'w-auto max-w-[210px] h-10 outline-none text-sm font-medium rounded-sm relative px-2',
              errorHint?.length ? 'border-error border-2' : '',
            )}
            name={name}
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
          <button aria-label="button-edit" className='z-10' type='button' onClick={() => setIsEdit(true)}>
            <Icon icon={'bx:edit'} className="cursor-pointer text-2xl" />
          </button>
        )}
      </div>
    </>
  )
}