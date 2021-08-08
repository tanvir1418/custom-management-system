// Manage Alert Table Existing Pagination Start
let alertExistData = [];

for (let i = 1; i <= 100; i++) {
  alertExistData.push({
    id: `md-ex-${i}`,
    serial: i,
    alertValue: `Alert Val - ${i}`,
    alertEmail: `alert${i}@gmail.com`
  });
}

function makeTableHeadAlert(tableID) {
  let tableHead =
    `<th class="">ROW</th>
        <th class="">ALERT TYPE
          <span class="tooltip-container" tooltip="Sample text here1" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ALERT VALUE
          <span class="tooltip-container" tooltip="Sample text here2" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ALERT FREQUENCY
          <span class="tooltip-container" tooltip="Sample text here3" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ALERT METHOD
          <span class="tooltip-container" tooltip="Sample text here4" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ACTIONS
          <span class="tooltip-container" tooltip="Sample text here5" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
          </th>`;

  $(`#${tableID} thead`).html(tableHead);

}

function alertTableExist(tableID, noRow, pagiId, maDataTableId, maLoadTableId) {
  let options = {
    dataSource: alertExistData,
    pageSize: noRow,
    showGoInput: true,
    showGoButton: true,
    callback: function (data, pagination) {

      $(`#${maDataTableId}`).css("display", "none");
      $(`#${maLoadTableId}`).css("display", "block");

      setTimeout(() => {
        $(`#${maLoadTableId}`).css("display", "none");
        $(`#${maDataTableId}`).css("display", "block");
      }, 2000);

      let tableTr = "";
      data.forEach(({ id, serial, alertValue, alertEmail }, index) => {
        let tabHd = $(`#${tableID} thead th`);
        let len = tabHd.length;
        let classList = [];
        for (let i = 1; i < len - 1; i++) {
          classList.push(tabHd[i].className);
        }
        tableTr += `
          <tr id="${id}">
					<th class="row-data" scope="row">${serial}</th>
          <td class="selectaltype ${classList[0]}">
              <select name="" id="">
                  <option class="alert-exists-data" value="">Precent Change Greather...</option>
                  <option class="alert-exists-data" value="">Precent Change Greather...1</option>
                  <option class="alert-exists-data" value="">Precent Change Greather...2</option>
                  <option class="alert-exists-data" value="">Precent Change Greather...3</option>
              </select>
              <div class="selectarrow">
                  <i class="fas fa-caret-down"></i>
              </div>
          </td>
					<td class="${classList[1]} inpalertval">
            <input type="text" class="alert-exists-data" value="${alertValue}">
					</td>
					
          <td class="${classList[2]} selectalfreq">
              <select name="" id="">
                  <option class="alert-exists-data" value="">Anytime</option>
                  <option class="alert-exists-data" value="">Anytime 1</option>
                  <option class="alert-exists-data" value="">Anytime 2</option>
                  <option class="alert-exists-data" value="">Anytime 3</option>
              </select>
              <div class="selectarrow">
                  <i class="fas fa-caret-down"></i>
              </div>
          </td>
					
          <td class="${classList[3]} inpumail">
              <div class="mail_enter">
                  <div class="mail_icons">
                      <i class="fas fa-envelope iconActive"></i>
                      <i class="fas fa-phone-alt"></i>
                      <i class="fas fa-comment-alt"></i>
                  </div>
                  <!-- <input type="email" class="alert-exists-data" value="${alertEmail}" placeholder="Enter a Email Address"> -->
                  <input type="email" class="alert-exists-data" value="" placeholder="Enter a Email Address">
              </div>
          </td>
					
					<td class="removenull">
              <div class="reset-save-btn">
                  <button class="reset4" type="button">Reset</button>
                  <button class="save4 mnAlertSave" type="button" onclick="saveManageAlertRow(event)">Save</button>
              </div>
              <div class="cross-box-89">
                <div class="circle_550 plus89">
                  <i class="fas fa-plus"></i>
                </div>
                <div class="deleteTableRow circle_550" onclick="universalConfirmModalDelete(this)">
                  <i class="fas fa-times"></i>
                </div>
              </div>
          </td>
				</tr>`;
      }
      );
      $(`#${tableID} tbody`).html(tableTr);

      //Handling Alert Methods Icons
      manageAlertsIconHandling();

    },
  };
  let container = $(`#${pagiId}`);
  container.pagination(options);
}

makeTableHeadAlert("manage-alert-table-exist");
alertTableExist("manage-alert-table-exist", 7, "pagination-manage-alert", "manage_alert_data_table", "manage_alert_loading_table");

$("#row-mnAlert").change(function (e) {
  let noRow = e.target.value;
  alertTableExist("manage-alert-table-exist", noRow, "pagination-manage-alert", "manage_alert_data_table", "manage_alert_loading_table");
  alertTableHeadClick("manage-alert-table-exist");
});

// Manage Alert Table Existing Pagination End
function alertTableHeadClick(tableId) {
  $(`#${tableId} th`).click(function (e) {
    let target = e.target;
    let index = $(this).index() + 1;
    if (target.tagName === "I") {
      target = target.parentNode;
    }
    let regex = /cross/g;
    let regexD = /drop-filter/g;
    if (target.tagName === "DIV" && regex.test(target.className)) {
      $(`#${tableId} th:nth-child(${index})`).addClass("th-dis-none");
      $(`#${tableId} td:nth-child(${index})`).addClass("th-dis-none");
    } else if (target.tagName === "DIV" && regexD.test(target.className)) {
      let dataP = $(`#${tableId} td:nth-child(${index}) .alert-exists-data`);
      // console.log(dataP);
      let headingPop = $(`#${tableId} th:nth-child(${index})`)[0].textContent;
      $(`#${tableId} th:nth-child(${index}) .drop-filter .fa-caret-down`).addClass("down-animation-icon");

      $("#dropBtnModal #mnExistsThPop").html(headingPop);
      let targetModal = $("#dropBtnModal #checkbox-table-exist tbody");
      const dataC = new Set();
      for (let i = 0; i < dataP.length; i++) {
        if (dataP[i].tagName == "INPUT") {
          dataC.add(dataP[i].value);
        } else {
          dataC.add(dataP[i].textContent);
        }
        // console.log(dataP[i].tagName);
      }
      let tableTr = "";
      for (const item of dataC) {
        tableTr += `<tr>
					<td>
						<div class="popup__checkbox__page__toggle">
							<label class="popup__checkbox__toggle">
								<input class="popup__checkbox__toggle__input" type="checkbox">
								<span class="popup__checkbox__toggle__label">
									<span class="popup__checkbox__toggle__text">${item}</span>
								</span>
							</label>
						</div>
					</td>
				</tr>`;
      }
      targetModal.html(tableTr);
      
      let elementPositionMain = e.target.getBoundingClientRect();
      $("#dropBtnModal").css('display', 'none');
      $("#dropBtnModal").css({
          top: ((elementPositionMain.y) + window.scrollY + 25),
          left: ((elementPositionMain.x) - 235),
          position: "absolute"
      });
      $("#dropBtnModal").css('display', 'block');

      // $("#dropBtnModal .modal-dialog").css({
      //   top: e.clientY + 15,
      //   left: e.clientX - 240,
      // });
      // $("#dropBtnModal").modal("toggle");
    }
  });
}

alertTableHeadClick("manage-alert-table-exist");


// Manage Alerts : Alert Methods Column ICONS (Changing Placeholder and Icon Color)

function manageAlertsIconHandling() {
  let emailIconMnAlert = $("#manage-alert-table-exist tr .inpumail .mail_icons");
  for (let i = 0; i < emailIconMnAlert.length; i++) {
    emailIconMnAlert[i].addEventListener("click", function (event) {
      // let elementPositionMain = event.target;
      if (event.target.nodeName == "I") {
        let iconClassName = event.target.classList[1];
        if (iconClassName == "fa-envelope") {
          $(emailIconMnAlert[i].children[0]).addClass("iconActive");
          $(emailIconMnAlert[i].children[1]).removeClass("iconActive");
          $(emailIconMnAlert[i].children[2]).removeClass("iconActive");

          $(emailIconMnAlert[i].parentNode.lastElementChild).attr("placeholder", "Enter a Email Address").attr("type", "email");
        }
        else if (iconClassName == "fa-phone-alt") {
          $(emailIconMnAlert[i].children[0]).removeClass("iconActive");
          $(emailIconMnAlert[i].children[1]).addClass("iconActive");
          $(emailIconMnAlert[i].children[2]).removeClass("iconActive");

          $(emailIconMnAlert[i].parentNode.lastElementChild).attr("placeholder", "Enter a Phone Number").attr("type", "number");
        }
        else if (iconClassName == "fa-comment-alt") {
          $(emailIconMnAlert[i].children[0]).removeClass("iconActive");
          $(emailIconMnAlert[i].children[1]).removeClass("iconActive");
          $(emailIconMnAlert[i].children[2]).addClass("iconActive");

          $(emailIconMnAlert[i].parentNode.lastElementChild).attr("placeholder", "Enter a Text Message").attr("type", "text");
        }

      }
    });
  }
}

let targetMnAlertSaveBtn = "";
function saveManageAlertRow(globalThis){
  targetMnAlertSaveBtn = globalThis.path[3].id;
  $("#mnAlert_confirm_modal #mnAlert_confirm_header p").html("SAVE DETAILS");
  $("#mnAlert_confirm_modal #mnAlert_confirm_deatis p").html("Confirm to save details?");
  $('#mnAlert_confirm_modal').modal('show');
}

// $('#universal_confirm_modal').on('hide.bs.modal', function (e) {
// 	$('body').removeClass("modal-force-mnAlert-extra");
// });

function manageAlertAfterConfirmBtn(){
  $('#mnAlert_confirm_modal').modal('hide');

  $('body').addClass("modal-force-mnAlert-extra");
  $("#submitting_file_info").html("Submitting row details...");
	$('#submitting_Info').modal('show');

  setTimeout(function() { 
    $("#submitting_file_info").html("Finishing...");
  }, 2000);

  
  let initStateRowBtn = $(`#${targetMnAlertSaveBtn} .reset-save-btn .mnAlertSave`).html();
	$(`#${targetMnAlertSaveBtn} .reset-save-btn .mnAlertSave`).html(' <i class="fa fa-spinner fa-spin"></i> ....');
	$(`#${targetMnAlertSaveBtn} .reset-save-btn .mnAlertSave`).addClass('disabled');
	let $thisSaveBtn = $(`#${targetMnAlertSaveBtn} .reset-save-btn .mnAlertSave`);
	setTimeout(function() {
		$thisSaveBtn.removeClass('disabled');
		$thisSaveBtn.html(initStateRowBtn);
	}, 4000);
  
  setTimeout(function() { 
      $('#submitting_Info').modal('hide');

      $('body').removeClass("modal-force-mnAlert-extra");

      $("#universalThankDraftModal #thank_draft_header p").html("THANK YOU");
	    $("#universalThankDraftModal #thank_draft_details p").html("Your Request has been Successfully Processed");
	    $('#universalThankDraftModal').modal('show');

  }, 4000);
}