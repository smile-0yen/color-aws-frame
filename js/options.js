document.addEventListener("DOMContentLoaded", function(){
    
    function storeOptions(){
        var name  = document.getElementById('account-name-1').value;
        var color = document.getElementById('account-color-1').value;
        var data = {};

        data[name] = color;
        chrome.storage.sync.set(data);
    }

    const saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click', storeOptions);
});
