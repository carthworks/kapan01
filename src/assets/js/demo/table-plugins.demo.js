/*
Template Name: HUD - Responsive Bootstrap 5 Admin Template
Version: 3.1.0
Author: Sean Ngu
Website: http://www.seantheme.com/hud/
*/

var handleRenderTableData = function() {
	var table = $('#datatableDefault').DataTable({
		dom: "<'row mb-3'<'col-sm-4'l><'col-sm-8 text-end'<'d-flex justify-content-end'fB>>>t<'d-flex align-items-center mt-3'<'me-auto'i><'mb-0'p>>",
    lengthMenu: [ 10, 20, 30, 40, 50 ],
		responsive: true,
		buttons: [
			{ extend: 'print', className: 'btn btn-outline-default btn-sm ms-2' },
			{ extend: 'csv', className: 'btn btn-outline-default btn-sm' }
		]
	});
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderTableData();
});