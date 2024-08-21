// 可以增加事項 addItem 函式
// 需要用Js，1. 取得外層的<ul> 2. 建立一個<li>插進去
function addItem() {
  // 取得外層的<ul>
  const ul = document.getElementById("list");
  //   也要取得輸入文字框
  const input = document.getElementById("input");
  //   取得input裡面的值
  const text = input.value;
  //   如果沒有輸入，會有提示
  if (text === "") {
    alert("請輸入內容");
    // 記得要return，不然function會往下跑
    return;
  }

  //   用js建立新的item，打入的內容變成li的條列式
  const newItem = document.createElement("li");
  //   需要有item的class
  newItem.classList.add("class");
  //   新的item(newItem)的內容，是我們輸入框(input)的值(第9行)
  newItem.innerText = text;

  //   點擊item後，要做打勾的動作，打勾邏輯寫在checkItem裡
  newItem.onclick = checkItem;

  //   新增的項目後面會有刪除的按鈕，新增span
  const deleteButton = document.createElement("span");
  //   有相同的class
  deleteButton.classList.add("delete");
  //   點選的onclick就是刪掉這一項目，叫deleteItem函式
  deleteButton.onclick = deleteItem;

  //新增到裡面去的delete按鈕
  newItem.appendChild(deleteButton);

  //   全部做完就清空輸入框的值
  input.value = "";
  //   把newItem append過去接到list後面
  // 插入DOM(新增的newItem是li，找父層放進去它裡面，就是ul)
  ul.appendChild(newItem);
}

// 打勾的函式
// 把<li>r加上checked的class即可
function checkItem() {
  const item = this;
  item.classList.toggle("checked");
}

// 刪掉這一項目函式
function deleteItem() {
  const item = this.parentNode;
  const parent = item.parentNode;
  parent.removeChild(item);
}

// 取得這個按鈕
const addButton = document.getElementById("add-button");
// 按鈕會有事件發生，叫這個函式，後面沒直接加()，當參數傳入，發生什麼才作用(這裡是點擊)
addButton.addEventListener("click", addItem);
// form 預設行為是繳交後會刷新頁面，所以不會儲存，預防這件事
const form = document.getElementById("input-wrapper");
// 預防刷新頁面
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
