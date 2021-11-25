$( document ).ready(function() {
    $('#sidebar-wrapper').hide();
});

function change(){
    console.log("Change");
    console.log(document.getElementById("token").value.slice(-1));
}

function hide() {
    var x = document.getElementById("words");
    if ($('#sidebar-wrapper').is(":hidden")) {
        $('#sidebar-wrapper').show();
    } else {
        $('#sidebar-wrapper').hide();
    }
  }

