export class Keyboard {
  #swichEl;
  #fontSelectEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#swichEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (e) => {
      // console.log(e.target.checked);
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });

    this.#fontSelectEl.addEventListener("change", (e) => {
      // console.log(e.target.value);
      document.body.style.fontFamily = e.target.value;
    });
  }
}
// class가 아닌 직접 html에 한번 시도해보기
