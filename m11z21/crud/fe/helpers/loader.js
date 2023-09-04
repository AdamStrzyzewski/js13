const loadIcon = document.querySelector("#loadIcon");

export function showLoader() {
  loadIcon.classList.add("visible");
}
export function hideLoader() {
  loadIcon.classList.remove("visible");
}
