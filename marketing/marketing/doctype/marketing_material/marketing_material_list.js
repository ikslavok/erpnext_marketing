frappe.listview_settings['Marketing Material'] = {
	add_fields: ["mm_name", "status", "start", "end", "name"],
	get_indicator: function(doc) {
		var status_color = {
			"Idea": "yellow",
			"Selected": "orange",
			"Submitted": "blue",
			"Rejected": "darkgrey",
			"Fix": "red",
			"Approved": "orange",
			"Published": "green",
			"Promotion": "green",
			"Revision": "blue",
            "Completed": "green"
		};
		return [__(doc.status), status_color[doc.status], "status,=,"+doc.status];
	},
};