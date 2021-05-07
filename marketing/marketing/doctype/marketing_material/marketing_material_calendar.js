frappe.views.calendar["Marketing Material"] = {
	field_map: {
		"start": "start",
		"end": "end",
		"id": "name",
		"title": "mm_name",
		"allDay": false
	},
	gantt: true,
	filters: [
		{
			
		}
	],
	get_events_method: "frappe.desk.calendar.get_events",
    get_css_class: function(data) {
		if(data.status=="Idea" | data.status=="Fix") {
			return "secondary";
		} else if(data.status=="Selected" | data.status=="Revision") {
			return "info";
		} else if(data.status=="Submitted") {
			return "warning";
		} else if(data.status=="Rejected") {
			return "dark";
		} else if(data.status=="Approved" | data.status=="Published" | data.status=="Promotion") {
			return "success";
		}
    }
}