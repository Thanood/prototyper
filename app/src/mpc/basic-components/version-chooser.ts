export class VersionChooser {

	datasource: kendo.data.DataSource;

	private versions = [
		{ver: "3.2.1"},
		{ver: "4.0.3"},
		{ver: "4.1.0"},
		{ver: "4.2.0"},
		{ver: "4.3.0"},
		{ver: "4.4.0"},
		{ver: "4.5.0"},
		{ver: "4.6.1"},
		{ver: "4.6.3"},
		{ver: "4.7.0"},
		{ver: "4.7.1"},
		{ver: "4.7.2"},
		{ver: "4.7.3"},
		{ver: "4.7.4"},
		{ver: "4.7.5"},
		{ver: "4.7.6"},
		{ver: "4.7.7"},
		{ver: "4.7.8"},
		{ver: "4.7.9"},
		{ver: "4.8.0"},
		{ver: "4.7.1"},
		{ver: "4.7.2"},
		{ver: "4.7.3"},
		{ver: "4.7.4"},
		{ver: "4.7.5"},
		{ver: "4.7.6"},
		{ver: "4.7.7"},
		{ver: "4.7.8"},
		{ver: "4.7.9"},
		{ver: "4.8.0"},
		{ver: "4.8.1"},
		{ver: "4.8.2"},
		{ver: "4.8.3"},
		{ver: "4.8.4"}
	]

	constructor() {
		this.datasource = new kendo.data.DataSource({
			data: this.versions,
			schema: {
				model: {
					fields: {
					}
				}
			},
	    	pageSize: 10		
		});

	}

	public scrollable = {virtual : true};

	rowSelected(e) {
	    let grid = e.sender;
	    let selectedRow = grid.select();
	    let dataItem: string = grid.dataItem(selectedRow).ver;
	    alert(dataItem);
	}
}
