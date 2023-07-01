type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textArea: UIWidget = {
  drag: () => {},
  resize: () => {},
};
