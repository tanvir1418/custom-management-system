/* =======Added by TANVIR (Copy Paste full file)====== */

$(".multistep-container .form-box .button-row .next").click(function () {
  $(this).parents(".form-box").hide();
  $(this).parents(".form-box").next().show();
});
$(".multistep-container .form-box .button-row .previous").click(function () {
  $(this).parents(".form-box").hide();
  $(this).parents(".form-box").prev().show();
});

const listSingle = document.querySelectorAll(".single-list-item-design");
const listSingleImg = document.querySelectorAll(".single-list-item-help");
const listSingleLink = document.querySelectorAll(".skip-link-container");
const listSingleTick = document.querySelectorAll(".green-tik-container");
const getTickContainer = document.querySelectorAll(".green-tik-and-skip-link");
const selectItemText = document.querySelectorAll(".selected-text-danger");
const fileBackgroundColor = document.querySelectorAll(".single-list-item-file-container");
const pTopText = document.querySelectorAll(".pTopText");

for (let i = 0; i < listSingle.length; i++) {
  listSingle[i].addEventListener("click", function () {
    listSingleLink[i].classList.toggle("hideListDiv");
    listSingleTick[i].classList.toggle("hideListDiv");
    fileBackgroundColor[i].classList.toggle("fileContainerColor");
    selectItemText[i].classList.toggle("hideListDiv");
    pTopText[i].classList.toggle("hideListDiv");
  });
  listSingle[i].addEventListener("mouseover", function () {
    getTickContainer[i].classList.toggle("imageVisibilityHide");
    listSingleImg[i].classList.toggle("imageVisibilityHide");
  });
  listSingle[i].addEventListener("mouseout", function () {
    getTickContainer[i].classList.toggle("imageVisibilityHide");
    listSingleImg[i].classList.toggle("imageVisibilityHide");
  });
}

//code below working fine
$(document).ready(function () {
  $('#my42567').addClass('createGreen');

  $('.zas').click(function () {
    $('#my42567').addClass('createGreen');
    $('#my42998').removeClass('manageGreen');


  });

  $('.pas').click(function () {
    $('#my42998').addClass('manageGreen');
    $('#my42567').removeClass('createGreen');

  });
});



// for Manage Template Page
// Not Working
$(document).ready(function () {
  $('.tab-239').click(function () {
    $(".mytab-239").removeClass('tab-active-239');
    $(".mytab-239[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active-239");
    $(".tab-239").removeClass('active-239');
    $(this).parent().find(".tab-239").addClass('active-239');
  });
});

//code below working fine
$(document).ready(function () {
  $('#my2567').addClass('createGreen');

  $('.zas').click(function () {
    $('#my2567').addClass('createGreen');
    $('#my2998').removeClass('manageGreen');


  });

  $('.pas').click(function () {
    $('#my2998').addClass('manageGreen');
    $('#my2567').removeClass('createGreen');

  });
});


// CHECK BOX GREEN BORDER

var span1 = document.querySelector('span.toggle__select1');
span1.addEventListener('click', function (e) {
  document.getElementById("fieldset_id1").classList.toggle('borderGreen');
});

var span2 = document.querySelector('span.toggle__select2');
span2.addEventListener('click', function (e) {
  document.getElementById("fieldset_id2").classList.toggle('borderGreen');
});

var span3 = document.querySelector('span.toggle__select3');
span3.addEventListener('click', function (e) {
  document.getElementById("fieldset_id3").classList.toggle('borderGreen');
});


var span4 = document.querySelector('span.toggle__select4');
span4.addEventListener('click', function (e) {
  document.getElementById("fieldset_id4").classList.toggle('borderGreen');
});

var span5 = document.querySelector('span.toggle__select5');
span5.addEventListener('click', function (e) {
  document.getElementById("fieldset_id5").classList.toggle('borderGreen');
});

var span6 = document.querySelector('span.toggle__select6');
span6.addEventListener('click', function (e) {
  document.getElementById("fieldset_id6").classList.toggle('borderGreen');
});

var span7 = document.querySelector('span.toggle__select7');
span7.addEventListener('click', function (e) {
  document.getElementById("fieldset_id7").classList.toggle('borderGreen');
});

var span8 = document.querySelector('span.toggle__select8');
span8.addEventListener('click', function (e) {
  document.getElementById("fieldset_id8").classList.toggle('borderGreen');
});

var span9 = document.querySelector('span.toggle__select9');
span9.addEventListener('click', function (e) {
  document.getElementById("fieldset_id9").classList.toggle('borderGreen');
});

var span10 = document.querySelector('span.toggle__select10');
span10.addEventListener('click', function (e) {
  document.getElementById("fieldset_id10").classList.toggle('borderGreen');
});

var span11 = document.querySelector('span.toggle__select11');
span11.addEventListener('click', function (e) {
  document.getElementById("fieldset_id11").classList.toggle('borderGreen');
});

// MANAGE TEMPLATE CHECK BOX GREEN BORDER
var span21 = document.querySelector('span.toggle__select21');
span21.addEventListener('click', function (e) {
  document.getElementById("fieldset_id21").classList.toggle('borderGreen');
});

var span22 = document.querySelector('span.toggle__select22');
span22.addEventListener('click', function (e) {
  document.getElementById("fieldset_id22").classList.toggle('borderGreen');
});

var span23 = document.querySelector('span.toggle__select23');
span23.addEventListener('click', function (e) {
  document.getElementById("fieldset_id23").classList.toggle('borderGreen');
});


var span24 = document.querySelector('span.toggle__select24');
span24.addEventListener('click', function (e) {
  document.getElementById("fieldset_id24").classList.toggle('borderGreen');
});

var span25 = document.querySelector('span.toggle__select25');
span25.addEventListener('click', function (e) {
  document.getElementById("fieldset_id25").classList.toggle('borderGreen');
});

var span26 = document.querySelector('span.toggle__select26');
span26.addEventListener('click', function (e) {
  document.getElementById("fieldset_id26").classList.toggle('borderGreen');
});

var span27 = document.querySelector('span.toggle__select27');
span27.addEventListener('click', function (e) {
  document.getElementById("fieldset_id27").classList.toggle('borderGreen');
});

var span28 = document.querySelector('span.toggle__select28');
span28.addEventListener('click', function (e) {
  document.getElementById("fieldset_id28").classList.toggle('borderGreen');
});

var span29 = document.querySelector('span.toggle__select29');
span29.addEventListener('click', function (e) {
  document.getElementById("fieldset_id29").classList.toggle('borderGreen');
});

var span210 = document.querySelector('span.toggle__select210');
span210.addEventListener('click', function (e) {
  document.getElementById("fieldset_id210").classList.toggle('borderGreen');
});

var span211 = document.querySelector('span.toggle__select211');
span211.addEventListener('click', function (e) {
  document.getElementById("fieldset_id211").classList.toggle('borderGreen');
});

// =========================================
// Below Section will be added by Tanvir 
// =========================================

// Option 1 Name Sortable (drag drop) 
//Left side drag
$(function () {
  $("#leftSideDrag_op1").sortable();
  $("#leftSideDrag_op1").disableSelection();
});

//Right side drag
$(function () {
  $("#rightSideDrag_op1").sortable();
  $("#rightSideDrag_op1").disableSelection();
});

// Manage Template Sortable (drag drop) 
//Left side drag
$(function () {
  $("#mnTemp_leftSideDrag").sortable();
  $("#mnTemp_leftSideDrag").disableSelection();
});
//Right side drag
$(function () {
  $("#mnTemp_rightSideDrag").sortable();
  $("#mnTemp_rightSideDrag").disableSelection();
});

// Manage Template Popup Scripts starts 
// Save start close button operation
$("#close-btn").on("click", function () {
  // $("#save_start_button_popup").hide();
  $('#mnTemp_saveStart').modal('hide');
});

// Manage Template Sample 4 DATE PICKER START
$(function () {

  $("#datepicker_mnTemp1").datepicker();
  $("#datepicker_mnTemp1").datepicker("option", "dateFormat", "DD, MM d, yy");

  $("#datepicker_mnTemp2").datepicker();
  $("#datepicker_mnTemp2").datepicker("option", "dateFormat", "DD, MM d, yy");
});

// Manage Template Time Picker Icon Click Operation Starts
$("#time_picker_close-btn").on("click", function () {
  // $("#time_picker_button_popup").hide();
  $('#mnTemp_timePicker').modal('hide');
});

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
      } else {
        this.value = "";
      }
    });
  });
}

function inputHour(hour) {
  const hour_input = document.querySelector("#hour_input");
  let regexH = /^(0?[1-9]{1})$|^(1[0-2]{1})$/g;
  let timeH = +hour_input.value + hour;
  if (regexH.test(timeH)) {
    hour_input.value = timeH;
    if (timeH < 10) {
      hour_input.value = `0${timeH}`
    }
  }
}
setInputFilter(document.querySelector("#hour_input"), function (value) {
  let regexH = /^(0?[1-9]{1})$|^(1[0-2]{1})$|^(\S?)$/g;
  return regexH.test(value);
});
document.querySelector("#hour_up").addEventListener("click", function () {
  inputHour(1)
});
document.querySelector("#hour_down").addEventListener("click", function () {
  inputHour(-1)
});

function inputMinute(min) {
  const min_input = document.querySelector("#min_input");
  let regexM = /^([0-5]?[0-9]{1})$/g;
  let timeM = +min_input.value + min;
  if (regexM.test(timeM)) {
    min_input.value = timeM;
    if (timeM < 10) {
      min_input.value = `0${timeM}`
    }
  }
}
setInputFilter(document.querySelector("#min_input"), function (value) {
  let regexM = /^([0-5]?[0-9]{1})$|^(\S?)$/g;
  return regexM.test(value);
});
document.querySelector("#min_up").addEventListener("click", function () {
  inputMinute(1)
});
document.querySelector("#min_down").addEventListener("click", function () {
  inputMinute(-1)
});

let inputId = "#timepicker_mnTemp1";
function setTimeValue() {
  let timeButton = document.querySelector("#timeButton");
  timeButton.addEventListener("click", function () {
    let formatTime = formatAMPM(new Date());
    let hours = document.querySelector("#hour_input").value === "" ? formatTime.hours : document.querySelector("#hour_input").value;
    let mins = document.querySelector("#min_input").value === "" ? formatTime.minutes : document.querySelector("#min_input").value;
    let ampm_check = document.querySelector("#ampmInputValue").value;
    document.querySelector(inputId).value = `${hours}:${mins} ${ampm_check.toLowerCase()}`;
    $('#mnTemp_timePicker').modal('hide');
  });
}

$("#TP_time1").click(function () {
  inputId = "#timepicker_mnTemp1";
  let currentTime = new Date();
  let formatTime = formatAMPM(currentTime);
  document.querySelector("#hour_input").value = formatTime.hours;
  document.querySelector("#min_input").value = formatTime.minutes;
  document.querySelector("#ampmInputValue").value = formatTime.ampm;
  setTimeValue();
  $('.ampm-picker .period').click();
});
$("#TP_time2").click(function () {
  inputId = "#timepicker_mnTemp2";
  let currentTime = new Date();
  let formatTime = formatAMPM(currentTime);
  document.querySelector("#hour_input").value = formatTime.hours;
  document.querySelector("#min_input").value = formatTime.minutes;
  setTimeValue();
  $('.ampm-picker .period').click();
});

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = {
    hours, minutes, ampm
  };
  return strTime;
};


// added by Tanvir (6-2-21) 
$('.ampm-picker .period').click(function (e) {
  let clicked = e.target.innerHTML;
  let selected = document.querySelector(".chosen-period").innerHTML;
  if (clicked !== selected) {
    // highlight the choice (de-highlight any previous choice)
    $('.chosen-period').removeClass('chosen-period');
    $(this).addClass('chosen-period');

    let period_am = document.querySelector(".am");
    let period_pm = document.querySelector(".pm");
    period_am.classList.add("pm");
    period_am.classList.remove("am");
    period_pm.classList.add("am");
    period_pm.classList.remove("pm");
    let ampmInputValue = document.querySelector("#ampmInputValue");
    ampmInputValue.value = clicked;
  }
});

// Form By Text Edit Pop Up Script
$("td input").click(function (event) {
  $("#sub__table").css({
    top: ((event.offsetY) + 160),
    left: ((event.offsetX) + 100)
  });
  $("#sub2__table").css({
    top: ((event.offsetY) + 180),
    left: ((event.offsetX) + 100 + 92)
  });
  //   $("#sub__table").css( {
  //     top: ((event.pageY)), 
  //     left: ((event.pageX))
  //   }    
  // );
  // $("#sub2__table").css( {
  //     top: ((event.pageY)), 
  //     left: ((event.pageX) + 92)
  //   }    
  // );
  if (!$("#sub__table").hasClass("dispHideShow")) {
    $("#sub__table").addClass("dispHideShow");
  }
  if (!$("#sub2__table").hasClass("dispHideShow")) {
    $("#sub2__table").addClass("dispHideShow");
  }

  var element = document.getElementById("sub__table");
  element.classList.toggle("dispHideShow");

});

$(".set_select").mouseenter(function (event) {
  var element = document.getElementById("sub2__table");
  element.classList.toggle("dispHideShow");
});

$(document).click(function (e) {
  if (!$(e.target).closest('.text-editor-table-wrapper').length) {
    // alert('click outside!');
    $("#sub__table").addClass("dispHideShow");
    $("#sub2__table").addClass("dispHideShow");
  }
});

// $("#sub2-editor-table td").click(function() {
//   alert(this.id); // or alert($(this).attr('id'));
// });