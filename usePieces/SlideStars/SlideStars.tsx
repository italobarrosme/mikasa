import { InputHTMLAttributes } from 'react'
import Styles from './SlideStars.module.scss'
import { Icon } from '@iconify/react'

export type SlideStarsProps = {
  starsMax?: number
  value?: number
  defaultValue?: number
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const SlideStars = ({
  starsMax = 5,
  onChange,
  defaultValue = 0,
  label
}: SlideStarsProps) => {



  return (
    <div className="flex items-center relative h-32">
      {label && <span className="absolute top-0">{label}</span>}
      <label htmlFor='slideStars' className={Styles['rating__stars']}>
        {[...Array(defaultValue)].map((_, i) => {
          return (
            <Icon
              key={i}
              icon='carbon:star-filled'
              width={32}
              className={Styles['rating__star']}
            />
          )
        })}

        {[...Array(starsMax - defaultValue)].map((_, i) => {
          return (
            <Icon
              key={i}

              icon='carbon:star'
              width={32}
              className={Styles['rating__star']}
            />
          )
        })}

        <input id="slideStars" className={Styles['rating__input']} type='range' min='0' max={starsMax} step='1' defaultValue={defaultValue} onChange={onChange} />
      </label>
    </div>
  );
};