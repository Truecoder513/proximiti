export function openMenu() {
  return {
    type: "OPEN_MENU",
    payload: { open: true },
  };
}

export function closeMenu() {
  return {
    type: "CLOSE_MENU",
    payload: { open: false },
  };
}
