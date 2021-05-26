import React from "react";
import styles from "./scrollable-buttons.module.scss";

function ScrollableButtons({
  selection,
  buttonArray,
  onChange,
}: ScrollableButtonsProps) {
  const elementRef = React.useRef<HTMLOListElement>(null);

  React.useEffect(() => {
    if (!elementRef.current) return;
    elementRef.current.scrollTop = 0;
    const button = elementRef.current.querySelector("button:not(:disabled)");
    if (!button) return;
    const parentTop = elementRef.current.getBoundingClientRect().top;
    const buttonTop = button.getBoundingClientRect().top;
    const buttonHeight = button.clientHeight;
    elementRef.current.scrollTo({
      top:
        buttonTop -
        parentTop +
        buttonHeight -
        elementRef.current.clientHeight / 2,
      left: 0,
      behavior: "smooth",
    });
  }, [buttonArray]);

  const handleOnClick = React.useCallback(
    (event) => {
      onChange(event.target.innerHTML);
    },
    [onChange]
  );

  return (
    <ol className={styles.scrollableButtons} ref={elementRef}>
      {buttonArray.map((item) => (
        <li key={item.text}>
          <button
            type="button"
            disabled={item.disabled}
            onClick={handleOnClick}
            className={item.text === selection ? styles.active : ""}
          >
            {item.text}
          </button>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ScrollableButtons);
