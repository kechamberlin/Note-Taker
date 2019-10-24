
$.ajax ({
    url: "/api/notes",
    method: "GET"
}).then(function (x){
    console.log(x)
    // (Taylor note) use jQuery to create html similar to this:
    // for each item in x
    // then append it to #cards-go-here
    var noteList = $("#notes-go-here");
    for (var i = 0; i < x.length; i++) {
        noteList.append(`
        <h2 class="notetitle">${x[i].title}</h2>
        <div>
          <h3><span class="usernote">${x[i].text}</span></h3>
        </div>
          `
        );
    }


})
