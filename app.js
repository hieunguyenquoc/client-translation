var textInp = document.querySelector("textarea[name='txtinput']");
const btn = document.querySelector("#btn");
var loader = $("#loader")
var fileNameUrl = ''
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

async function uploadAndTranslateFile() {
    var data = $('#arrowLR2').attr('data-current');
    var result = '';
    if (data === 'VN-L') {
        var serverUrl = `http://127.0.0.1:8000/Translate_Vi_Lao_Docs/`;
        result = await translateFile(serverUrl);
    } else {
        var serverUrl = `http://127.0.0.1:8000/Translate_Lao_Vi_Docs/`;
        result = await translateFile(serverUrl);
    }
    // return rs;
    var blob = new Blob([result], { type: "text/plain;charset=utf-8" });
    var d = new Date();
    var extendFile = "result_" + data + "_" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
    console.log("extend:", extendFile);
    await saveAs(blob, `${extendFile}.txt`);
    $("#formFileMultiple").replaceWith($("#formFileMultiple").val('').clone(true));
    // $('#formFileMultiple').val = ''
    // alert('You have successfully upload the file!');
}
async function translateFile(serverUrl) {
    // var serverUrl = `http://127.0.0.1:8000/Translate_Vi_Lao_Docs/`;
    var rs = ' ';
    //creating form data object and append file into that form data
    let formData = new FormData();
    fileNameUrl = formFileMultiple.files[0]
    if (fileNameUrl) {
        loader.addClass('loader__element')
        formData.append("file", fileNameUrl);

        console.log("test", formData);
        //network request using POST method of fetch
        rs = await fetch(serverUrl, {
                method: "POST",
                body: formData
            })
            .then(res => {
                console.log("res: ", res)
                return res.json()
            })

        loader.removeClass('loader__element')

        console.log(`rs: `, rs);
    }
    return rs;
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

$('.btn-wapper').on('click', function() {
    const dropArea = document.querySelector(".drop_box")
    const input = dropArea.querySelector("input");
    input.click()
})