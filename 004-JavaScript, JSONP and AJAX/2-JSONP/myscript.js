function dataHandler(info) {

    var output = '';

    String.prototype.ucfirst = function() {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }

    for (var i = 0; i <= info.links.length - 1; i++) {
        for (key in info.links[i]) {
            if (info.links[i].hasOwnProperty(key)) {
                output += '<li>' +
                    '<a href = "' + info.links[i][key] +
                    '">' + key.ucfirst() + '</a>';
                '</li>';
            }
        }
    }

    var update = document.getElementById('links');
    update.innerHTML = output;

}
