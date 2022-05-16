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

// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }


// translateVietLao("xin chào");
// function getTranslationUrl(text) {
//     return serverUrl + "?" + "text=" + text;
// }
// var inputText = textInp.value;

// function errorHandler(error) {
//     alert("Sorry,Something is wrong.Please try again after sometime!");
// }

// function clickHandler() {
//     console.log(textInp.value);
//     console.log(getTranslationUrl())
//     fetch(getTranslationUrl(textInp.value)).then(response => response.json()).then(json => {
//         output.innerText = json.contents.translated;

//     }).catch(errorHandler)
// };
// btn.addEventListener("click", clickHandler);



// there are other methods like
// creating a DOM element using document.createElement(),
// or using document.createTextNode() to create textNode,
// and then insert it using insertBefore() and appendChild(). Explore these pieces and write blogs on it when you understand this