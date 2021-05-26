interface HorizontalMenuProps {
  selection?: string;
  items: HorizontalMenuItems[];
  itemsVisible?: number;
  onChange: (item) => void;
}

interface HorizontalMenuItems {
  text: string;
  value: string;
}
