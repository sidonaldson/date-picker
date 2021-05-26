import React from "react";
import styles from "./horizontal-menu.module.scss";

function HorizontalMenu({
  selection,
  itemsVisible = 7,
  items,
  onChange,
}: HorizontalMenuProps) {
  const elementRef = React.useRef<HTMLElement>(null);
  const listWidth = (items.length / itemsVisible) * 100;
  const itemWidth = 100 / items.length;
  let itemWidthInPx = 0;

  const getItemWidth = () => {
    if (!elementRef.current) return;
    const button = elementRef.current.querySelector("button");
    if (!button) return (itemWidthInPx = 0);
    itemWidthInPx = button.clientWidth;
  };

  const onNudgerClick = React.useCallback(
    (event) => {
      if (!elementRef.current) return;
      const dir = event.target.getAttribute("data-dir") || "";
      const left = elementRef.current.scrollLeft;
      elementRef.current.scrollTo({
        top: 0,
        left: dir === "right" ? left + itemWidthInPx : left - itemWidthInPx,
        behavior: "smooth",
      });
    },
    [itemWidthInPx]
  );

  const onItemClick = React.useCallback(
    (event) => {
      onChange(event.target.getAttribute("data-value") || "");
    },
    [onChange]
  );

  React.useEffect(() => {
    window.addEventListener("resize", getItemWidth);
    getItemWidth();
    return function cleanup() {
      window.removeEventListener("resize", getItemWidth);
    };
    // I don't care about this as i'm using useEffect for mount/unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!elementRef.current) return;
    // elementRef.current.scrollLeft = 0;
  }, [items, itemsVisible, onChange]);

  if (!items.length) return null;

  return (
    <article className={styles.horizontalMenu}>
      <button
        type="button"
        className={styles.horizontalMenu__nudger}
        onClick={onNudgerClick}
        tabIndex={-1}
        data-dir="left"
      >
        &lt;
      </button>

      <nav className={styles.horizontalMenu__list} ref={elementRef}>
        <ul
          style={{ width: `${listWidth}%` }}
          className={styles.horizontalMenu__listitem}
        >
          {items.map((item, index) => (
            <li key={index} style={{ width: `${itemWidth}%` }}>
              <button
                type="button"
                className={item.value === selection ? styles.active : ""}
                onClick={onItemClick}
                tabIndex={1}
                dangerouslySetInnerHTML={{ __html: item.text }}
                data-value={item.value}
              />
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className={styles.horizontalMenu__nudger}
        onClick={onNudgerClick}
        tabIndex={-1}
        data-dir="right"
      >
        &gt;
      </button>
    </article>
  );
}

export default React.memo(HorizontalMenu);
