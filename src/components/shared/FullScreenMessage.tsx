import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했습니다. 잠시 후 다시 시도해주세요.
        </>
      )}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <g id="_02_alert-hexagon" data-name="02 alert-hexagon">
        <path d="M26.93,9.06l-10-5.25a2,2,0,0,0-1.86,0l-10,5.25A2,2,0,0,0,4,10.83V21.17a2,2,0,0,0,1.07,1.77l10,5.25a2,2,0,0,0,1.86,0l10-5.25A2,2,0,0,0,28,21.17V10.83A2,2,0,0,0,26.93,9.06ZM26,21.17,16,26.42,6,21.17V10.83L16,5.58l10,5.25Z" />
        <path d="M15,11v7a1,1,0,0,0,2,0V11a1,1,0,0,0-2,0Z" />
        <path d="M16.71,21.29l-.16-.12a.56.56,0,0,0-.17-.09L16.2,21a1,1,0,0,0-.58.06.9.9,0,0,0-.54.54A1,1,0,0,0,15,22a1.36,1.36,0,0,0,0,.2.64.64,0,0,0,.06.18.56.56,0,0,0,.09.17l.12.16a1.15,1.15,0,0,0,.33.21A1,1,0,0,0,16,23a1.05,1.05,0,0,0,.71-.29A1,1,0,0,0,17,22a1,1,0,0,0-.08-.38A1.15,1.15,0,0,0,16.71,21.29Z" />
      </g>
    </svg>
  )
}

export default FullScreenMessage
