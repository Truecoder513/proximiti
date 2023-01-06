export function openModal(content) {
  return {
    type: "OPEN_MODAL",
    payload: { open: true, content },
  };
}

export function closeModal() {
  return {
    type: "OPEN_MODAL",
    payload: { open: false, content: null },
  };
}
