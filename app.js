var textInp = document.querySelector("textarea[name='txtinput']");
const btn = document.querySelector("#btn");

// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// var serverUrl = "https://api.funtranslations.com/translate/minion.json";
// var serverUrl = "http://localhost:8000/Translate_Vi_La";
async function tranlate() {
    var data = $('#arrowLR').attr('data-current');
    if (data === 'VN-L') {
        translateVietLao();
    } else {
        translateLaoViet();
    }
}
async function translateVietLao() {
    $('#box2 .card-body').html(
            '<div class="d-flex justify-content-center">' +
            '<div class="spinner-border" role="status">' +
            ' <span class="visually-hidden">Loading...</span>' +
            '</div>' +
            ' </div>'
        )
        // outputValue = '';
    console.log("txtInput: ", textInp.value);
    var textValue = textInp.value;
    var serverUrl = `http://localhost:8000/Translate_Vi_La?text=${textValue}`;
    const result = await fetch(serverUrl).then((response) => response.json());
    console.log("Hello: ", result);
    $('#box2 .card-body').html(result)
}
async function translateLaoViet() {
    $('#box2 .card-body').html(
            '<div class="d-flex justify-content-center">' +
            '<div class="spinner-border" role="status">' +
            ' <span class="visually-hidden">Loading...</span>' +
            '</div>' +
            ' </div>'
        )
        // outputValue = '';
    console.log("txtInput: ", textInp.value);
    var textValue = textInp.value;
    var serverUrl = `http://localhost:8000/Translate_La_Vi?text=${textValue}`;
    const result = await fetch(serverUrl).then((response) => response.json());
    console.log("Hello: ", result);
    $('#box2 .card-body').html(result)
}
async function translateViLaoDoc() {
    var serverUrl = `http://127.0.0.1:8000/Translate_Vi_Lao_Docs/`;

}

async function uploadFile() {
    var serverUrl = `http://127.0.0.1:8000/Translate_Vi_Lao_Docs/`;
    //creating form data object and append file into that form data
    let formData = new FormData();
    formData.append("file", formFileMultiple.files[0]);

    console.log("test", formData);
    //network request using POST method of fetch
    var rs = await fetch(serverUrl, {
        method: "POST",
        body: formData
    }).then(res => res.json());
    console.log(`rs: `, rs);
    // return rs;
    var blob = new Blob([rs], { type: "text/plain;charset=utf-8" });
    var d = new Date();
    var extendFile = "result_" + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds();
    console.log("extend:", extendFile);
    saveAs(blob, `${extendFile}.txt`);
    // alert('You have successfully upload the file!');
}

$('#arrowLR').on('click', function() {
    textInp.value = '';
    $('#box2 .card-body').empty();
    var data = $('#arrowLR').attr('data-current')
    if (data === 'VN-L') {
        $('#arrowLR').attr('data-current', 'L-VN')
        $('#box1 .card-title').html('Lao')
        $('#box2 .card-title').html('Vietnamese')
    } else {
        $('#arrowLR').attr('data-current', 'VN-L')
        $('#box2 .card-title').html('Lao')
        $('#box1 .card-title').html('Vietnamese')
    }
})
$('#arrowLR2').on('click', function() {
    textInp.value = '';
    $('#box4 .card-body').empty();
    var data = $('#arrowLR2').attr('data-current')
    if (data === 'VN-L') {
        $('#arrowLR2').attr('data-current', 'L-VN')
        $('#box3 .card-title').html('Lao')
        $('#box4 .card-title').html('Vietnamese')
    } else {
        $('#arrowLR2').attr('data-current', 'VN-L')
        $('#box4 .card-title').html('Lao')
        $('#box3 .card-title').html('Vietnamese')
    }
})

// $("#translate-btn").on('click', function() {
//     console.log('Translate file');
//     var blob = new Blob([uploadFile()], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "testfile1.txt");
// });

$('#pills-profile-tab').on('click', function() {
    $('#pills-home').css('display', 'none')
})
$('#pills-home-tab').on('click', function() {
    $('#pills-home').css('display', 'block')
})