var $submitButton = $("#submit");

var handleNoteSave = function(e) {
    e.preventDefault();
    console.log("Hello!");
    const userTitle =  $("#note-title").val();
    const userContent = $("#note-content").val();
    console.log(userTitle, userContent);
    $.ajax ({
        url: "/api/notes",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            title: userTitle,
            text: userContent
        }),
        dataType: 'json'
    });

}

$submitButton.on("click", handleNoteSave);
