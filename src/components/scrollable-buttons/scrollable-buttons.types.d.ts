interface ScrollableButtonsProps {
  selection?: string;
  buttonArray: ScrollableButtonsItem[];
  onChange: (item) => void;
}

interface ScrollableButtonsItem {
  disabled?: boolean;
  text: string;
}
