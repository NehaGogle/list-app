function autoFocus() {
  var index = $("#tableScroll tr").length + 1;
  var inputFields = ["name", "mobile"];
  if ($("#name").val() != "") {
    var newRow = `<tr id="${index}">`;
    inputFields.forEach(function (field) {
      newRow += `<td id="${field + index}">${$("#" + field).val()}</td>`;
    });
    newRow += `<td>
    <i onclick="editTask('${index}')" >&#128394;</i> </td>
    <td><i id="DeleteButton" onclick="deleteRow(this);" >&#10060;</i></td>
                </tr>`;
    $("#tableScroll").append(newRow);
    $("#name,#mobile").val("");
  }
  else {
    alert("Please enter a name");
  }
  $("#name").focus();
}
var rowIdx = 0;
function deleteRow(element) {
  var child = $(element).closest("tr").nextAll();
  child.each(function () {
    var id = $(this).attr("id");
    var dig = Number(id);
    var index = dig - 1;
    //alert(index);
    $(this).attr("id", index);
    var inputFields = ["name", "mobile"];
    inputFields.forEach(function (field) {
      $("#" + field + dig).attr("id", field + index);
    });
  });
  $(element).closest("tr").remove();
  rowIdx--;
}

function editTask(index) {
  // Show the "Save Changes" button and hide the "Add New" button
  $("#edit_btn").removeClass("d-none");
  $("#add_btn").addClass("d-none");
  var name = $("#name" + index).html();
  var mobile = $("#mobile" + index).html();

  // Fill the form fields with the contact data
  $("#name").val(name);
  $("#mobile").val(mobile);
  $("#index").val(index);
  $("#name").focus();
}

function updateContact() {
  var name = $("#name").val();
  var mobile = $("#mobile").val();
  var ind = $.trim($("#index").val());
  if ($("#name").val() != "") {
  // Update the contact information in the displayed contact list
  $("#name" + ind).html(name);
  $("#mobile" + ind).html(mobile);

  // Clear the form fields
  $("#name, #mobile ").val("");
  // Hide the "Save Changes" button and show the "Add New" button
 
  $("#edit_btn").addClass("d-none");
  $("#add_btn").removeClass("d-none");
  // Reset the selected contact index
  ind = -1;
  } else {
    alert("Please enter a name");
  }
}
