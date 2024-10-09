/* eslint-disable react/prop-types */
import { Tooltip } from 'react-tooltip'
import TooltipText from '../../components/TooltipText'

const DisplayBox = ({ main, position, secondary }) => {
  const styles = {
    kiri: 'gap-6',
    bawah: 'flex-col-reverse gap-3',
    atas: 'flex-col gap-3',
    kanan: 'flex-row-reverse gap-6',
    belakang: 'flex-row-reverse',
    depan: '',
    diantara: ''
  }

  const size = (position === 'bawah') | (position === 'atas') ? 'h-20' : 'h-24'
  const posMain = position === 'belakang' ? 'relative right-8 z-10' : ''
  const posSecondary = position === 'belakang' ? 'relative left-8 z-20' : ''

  const mainDepan = position === 'depan' ? 'relative left-8 z-20' : ''
  const secondaryDepan = position === 'depan' ? 'relative right-8 z-10' : ''

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <div className={`min-h-52 flex justify-center items-center ${styles[position]}`}>
        {position === 'diantara' ? (
          <div>
            <TooltipText content={`${secondary.name} = ${secondary.english}`}>
              <img
                className={`${size} ${posSecondary} ${secondaryDepan}`}
                src={`/images/${secondary.image}`}
                alt={secondary.english}
              />
            </TooltipText>
          </div>
        ) : null}
        <div>
          <TooltipText content={`${main.name} = ${main.english}`}>
            <img
              className={`${size} ${posMain} ${mainDepan}`}
              src={`/images/${main.image}`}
              alt={main.english}
            />
          </TooltipText>
        </div>
        <div>
          <TooltipText content={`${secondary.name} = ${secondary.english}`}>
            <img
              className={`${size} ${posSecondary} ${secondaryDepan}`}
              src={`/images/${secondary.image}`}
              alt={secondary.english}
            />
          </TooltipText>
        </div>
      </div>
      <p className="text-green-800 text-sm text-center">
        Hover over the images (tap on mobile) to see translation
      </p>
    </div>
  )
}

export default DisplayBox
