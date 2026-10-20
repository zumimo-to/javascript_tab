// JavaScript
console.log('Hello world!');


const allTabButtons = document.querySelectorAll('.tab-button');
const allTabContents = document.querySelectorAll('.tab-content');

console.log('タブボタン数:', allTabButtons.length);
console.log('コンテンツ数:', allTabContents.length);

//←この位置に関数を記載


function resetAllTabs() {
    console.log('リセット開始');
    // 全てのタブから .active クラスを削除する
    for (let i = 0; i < allTabButtons.length; i++) {
        allTabButtons[i].classList.remove('active');
    }
    // 全てのコンテンツから .active クラスを削除する
    for (let i = 0; i < allTabContents.length; i++) {
        allTabContents[i].classList.remove('active');
    }
    console.log('リセット完了');
}


    function activateTab(tabId) {
    console.log('有効化開始:', tabId);
    const content = document.getElementById(tabId);
    const button = document.querySelector(`.tab-button[data-id="${tabId}"]`);
    
    console.log('見つかったコンテンツ:', content);
    console.log('見つかったボタン:', button);
    
    if (content) content.classList.add('active');
    if (button) button.classList.add('active');
    console.log('有効化完了');
}


//イベント
for (let i = 0; i < allTabButtons.length; i++) {
    allTabButtons[i].addEventListener('click', (event) => {
        console.log('タブがクリックされました');

        const clickedTabId = event.currentTarget.dataset.id;
        console.log('クリックされたID:', clickedTabId);

        if (!clickedTabId) return;

        resetAllTabs();
        activateTab(clickedTabId);
    });
}