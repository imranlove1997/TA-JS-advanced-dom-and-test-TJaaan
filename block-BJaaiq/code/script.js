let listElm = document.querySelector('.adding-list');

var loadMore = function () {
    for(let i = 0; i < quotes.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = `<blockqote>${quotes[i].quoteText}</blockquote>
        <p>${quotes[i].quoteAuthor}</p>`;
        listElm.appendChild(item);
    }
};

listElm.addEventListener("scroll", function() {
    if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        loadMore();
    }
});

loadMore();

window.addEventListener("DOMContentLoaded", (event) => {
    alert("The conent of thr DOM is loaded");
});