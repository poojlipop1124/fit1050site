$('#filters button').click(filterEvents);

function filterEvents() {
    let buttonClicked = this;

    let selectedData = $(buttonClicked).data('abc');

    $('#products img').hide();
    $(selectedData).fadeIn();
}

function showAlert() {
    alert('hisadfas');
}

// document.querySelector('h1').addEventListener('click', showAlert);

$('h1').click(showAlert);

$('#products img').click(thirdPartySwal);

function thirdPartySwal(){
swal("HHey Pooja!", "...and here's the text!");

}