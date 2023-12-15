const main = document.querySelector(".main");
const header = document.querySelector(".culc__header");
const itemContainer = document.querySelector(".culc__grid-container");
const display = document.querySelector(".display__output");
const calcBody = document.querySelector(".calc__body");
const items = document.querySelectorAll(".item");
const del = document.querySelector(".item-del");
const reset = document.querySelector(".item-reset");
const equal = document.querySelector(".item-equal");
const toggle = document.querySelector(".toggle");
const mode1 = document.getElementById("mode1");
const mode2 = document.getElementById("mode2");
const mode3 = document.getElementById("mode3");

const modes = Array.from(document.querySelectorAll(".toggle__label"));
console.log(modes);

function moveToggle() {
  modes.forEach((mode) => {
    mode.addEventListener("click", (e) => {
      modes.forEach((el) => {
        if (el !== mode) {
          el.classList.add("opacity-0");
        }
      });

      if (mode.classList.contains("opacity-0")) {
        mode.classList.remove("opacity-0");
      } else {
        mode.classList.add("opacity-1");
      }
    });
  });
}
moveToggle(modes);

function changeMode2(mode) {
  modes.forEach((el) => {
    el.addEventListener("click", (e) => {
      const eTagetClicked = e.target;

      if (
        !el.classList.contains("opacity-0") &&
        eTagetClicked.classList.contains("label__mode2")
      ) {
        // console.log(e.target == el);
        document.body.style.background = "#E6E6E6";
        calcBody.style.background = "#D2CDCD";
        header.style.color = "#36362C";
        toggle.style.background = "#D2CDCD";
        display.style.background = "#EEEEEE";
        display.style.color = "#36362C";
        items.forEach((item) => {
          item.style.background = "#E5E4E1";
          item.style.color = "#36362C";
          item.style.boxShadow = "0 4px 0 0 #979797";
        });

        del.style.background = "#378187";
        del.style.boxShadow = "0 4px 0 0 #256369";

        reset.style.background = "#378187";
        reset.style.boxShadow = "0 4px 0 0 #256369";

        equal.style.background = "#C85402";
        equal.style.boxShadow = "0 4px 0 0 #7d3604";
      } else if (
        !el.classList.contains("opacity-0") &&
        eTagetClicked.classList.contains("label__mode3")
      ) {
        document.body.style.background = "#17062A";
        calcBody.style.background = "#1E0936";
        header.style.color = "#FFE53D";
        toggle.style.background = "#1E0936";
        display.style.background = "#1E0936";
        display.style.color = "#FFE53D";
        items.forEach((item) => {
          item.style.background = "#331C4D";
          item.style.color = "#FFE53D";
          item.style.boxShadow = "0 4px 0 0 #56077C";
        });

        document.querySelector(".label__mode3").style.background = "#00DED0";

        del.style.background = "#56077C";
        del.style.boxShadow = "0 4px 0 0 #7f09b6";

        reset.style.background = "#56077C";
        reset.style.boxShadow = "0 4px 0 0 #7f09b6";

        equal.style.background = "#00DED0";
        equal.style.boxShadow = "0 4px 0 0 #54f8ed";
        equal.style.color = "#1A2327";
      } else if (eTagetClicked.classList.contains("label__mode1")) {
        document.body.style.background = "#3A4663";
        calcBody.style.background = "#242D44";
        header.style.color = "#ffffff";
        toggle.style.background = "#242D44";
        display.style.background = "#181F33";
        display.style.color = "#ffffff";
        items.forEach((item) => {
          item.style.background = "#EAE3DC";
          item.style.color = "#434A59";
          item.style.boxShadow = "0 4px 0 0 #979797";
        });

        del.style.background = "#A2B2E1";
        del.style.boxShadow = "0 4px 0 0 #3A4663";
        del.style.color = "#ffffff";

        reset.style.background = "#A2B2E1";
        reset.style.boxShadow = "0 4px 0 0 #3A4663";
        reset.style.color = "#ffffff";

        equal.style.background = "#D03F2F";
        equal.style.boxShadow = "0 4px 0 0 #C85402";
        equal.style.color = "#ffffff";
      }
    });
  });
}
changeMode2(modes);

const sign = ["*", "/", "-", "+", "="];
let output = "";

const calc = (value) => {
  if (value === "=" && value !== "") {
    output = eval(output.replace());
    console.log(output);
  } else if (value === "reset") {
    output = '';
  } else if (value === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && sign.includes(value)) return;
    output += value;
  }

  display.textContent = output;
};

items.forEach((item) => {
  item.addEventListener("click", (e) => calc(e.target.textContent));
});
