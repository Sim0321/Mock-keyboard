export class Keyboard {
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #Press = true;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#swichEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
    //getElementById 는 document에서만 사용 할 수 있다.
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      console.log(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test());
      // this.#inputGroupEl.classList.toggle("error", this.#keyPress);

      this.#keyboardEl
        .querySelector(`[data-code = ${e.code}]`)
        ?.classList.add("active");
    });
    document.addEventListener("keyup", (e) => {
      this.#keyboardEl
        .querySelector(`[data-code = ${e.code}]`)
        ?.classList.remove("active");
    });
  }
  #onChangeTheme(e) {
    document.documentElement.setAttribute(
      "theme",
      e.target.checked ? "dark-mode" : ""
    );
  }

  #onChangeFont(e) {
    document.body.style.fontFamily = e.target.value;
  }
}
// class가 아닌 직접 html에 한번 시도해보기
