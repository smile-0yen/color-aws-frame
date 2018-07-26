// default color is #444444
function changeBgByAccount(key){
    chrome.storage.sync.get(key, function(items){
        var background = "#444444";
        var values = Object.values(items);
        var background = values[0];

        console.log("account/background: " + key + "/" + values);

        var selectors = ["#nav-menubar", "#nav-menu-right", "#console-nav-footer"];
        selectors.forEach(function(s) {
          document.querySelector(s).style.background = background;
        })

        var selectors = document.querySelectorAll(".nav-menu");
        for (var i = 0; i < selectors.length; i++) {
          selectors[i].style.background = background;
        }
    });
}

(function() {
    var account = document.querySelector("#nav-usernameMenu .nav-elt-label").textContent;
    changeBgByAccount(account);
})();
