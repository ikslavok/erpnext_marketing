frappe.listview_settings['Marketing Position'] = {
	add_fields: ["position_name", "status", "platform", "Resolution"],
	get_indicator: function(doc) {
		var status_color = {
			"Free": "red",
			"Ocupied": "green",
			"Submitted": "orange"
		};
		return [__(doc.status), status_color[doc.status], "status,=,"+doc.status];
	},
};