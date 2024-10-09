/* eslint-disable react/prop-types */
const TooltipText = ({ children, content, className = '', ...props }) => {
  return (
    <span
      {...props}
      className={`underline select-none ${className}`}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={content}
    >
      {children}
    </span>
  )
}

export default TooltipText
