import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-main-convertor',
  templateUrl: './main-convertor.component.html',
  styleUrls: ['./main-convertor.component.css']
})
export class MainConvertorComponent implements OnInit {
	public csv2jsonRadioModel = 'copy_csv';

	public disable_json_textarea:boolean = false;
	public disable_csv_textarea:boolean = false;
  	
  	constructor() {
  		this.toggleAction();
  	}

  	ngOnInit() { 
  		
  	}


  	toggleAction(){
  		if(this.csv2jsonRadioModel === 'copy_csv' || this.csv2jsonRadioModel === 'upload_csv'){
  			this.disable_json_textarea = true;
  			this.disable_csv_textarea = false;
  		}

  		else if(this.csv2jsonRadioModel === 'copy_json' || this.csv2jsonRadioModel === 'upload_json'){
  			this.disable_csv_textarea = true;
  			this.disable_json_textarea = false;
  		}
  	}

  	convertCsv(){
	    var csv = $("#csv").val();
	    var json = this.CSV2JSON(csv);
	    $("#json").val(json);
  	}

  	downloadJson(){
  		var csv = $("#csv").val();
	    var json = this.CSV2JSON(csv);
	    window.open("data:text/json;charset=utf-8," + escape(json))
  	}

  	convertJson(){
  		var json = $.parseJSON($("#json").val());
		    var csv = this.JSON2CSV(json);
		    $("#csv").val(csv);
  	}

  	downloadCsv(){
  		var json = $.parseJSON($("#json").val());
		    var csv = this.JSON2CSV(json);
		    window.open("data:text/csv;charset=utf-8," + escape(csv));
  	}

  	// Source: http://www.bennadel.com/blog/1504-Ask-Ben-Parsing-CSV-Strings-With-Javascript-Exec-Regular-Expression-Command.htm
	// This will parse a delimited string into an array of
	// arrays. The default delimiter is the comma, but this
	// can be overriden in the second argument.

	CSVToArray(strData, strDelimiter?) {
	    // Check to see if the delimiter is defined. If not,
	    // then default to comma.
	    strDelimiter = (strDelimiter || ",");
	    // Create a regular expression to parse the CSV values.
	    var objPattern = new RegExp((
	    // Delimiters.
	    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
	    // Quoted fields.
	    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
	    // Standard fields.
	    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
	    // Create an array to hold our data. Give the array
	    // a default empty first row.
	    var arrData = [[]];
	    // Create an array to hold our individual pattern
	    // matching groups.
	    var arrMatches = null;
	    // Keep looping over the regular expression matches
	    // until we can no longer find a match.
	    while (arrMatches = objPattern.exec(strData)) {
	        // Get the delimiter that was found.
	        var strMatchedDelimiter = arrMatches[1];
	        // Check to see if the given delimiter has a length
	        // (is not the start of string) and if it matches
	        // field delimiter. If id does not, then we know
	        // that this delimiter is a row delimiter.
	        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
	            // Since we have reached a new row of data,
	            // add an empty row to our data array.
	            arrData.push([]);
	        }
	        // Now that we have our delimiter out of the way,
	        // let's check to see which kind of value we
	        // captured (quoted or unquoted).
	        if (arrMatches[2]) {
	            // We found a quoted value. When we capture
	            // this value, unescape any double quotes.
	            var strMatchedValue = arrMatches[2].replace(
	            new RegExp("\"\"", "g"), "\"");
	        } else {
	            // We found a non-quoted value.
	            var strMatchedValue = arrMatches[3];
	        }
	        // Now that we have our value string, let's add
	        // it to the data array.
	        arrData[arrData.length - 1].push(strMatchedValue);
	    }
	    // Return the parsed data.
	    return (arrData);
	}

	CSV2JSON(csv) {
	    var array = this.CSVToArray(csv);
	    var objArray = [];
	    for (var i = 1; i < array.length; i++) {
	        objArray[i - 1] = {};
	        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
	            var key = array[0][k];
	            objArray[i - 1][key] = array[i][k]
	        }
	    }

	    var json = JSON.stringify(objArray);
	    var str = json.replace(/},/g, "},\r\n");

	    return str;
	}

	JSON2CSV(objArray) {
	    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

	    var str = '';
	    var line = '';

	    if ($("#labels").is(':checked')) {
	        var head = array[0];
	        if ($("#quote").is(':checked')) {
	            for (var index in array[0]) {
	                var value = index + "";
	                line += '"' + value.replace(/"/g, '""') + '",';
	            }
	        } else {
	            for (var index in array[0]) {
	                line += index + ',';
	            }
	        }

	        line = line.slice(0, -1);
	        str += line + '\r\n';
	    }

	    for (var i = 0; i < array.length; i++) {
	        var line = '';

	        if ($("#quote").is(':checked')) {
	            for (var index in array[i]) {
	                var value = array[i][index] + "";
	                line += '"' + value.replace(/"/g, '""') + '",';
	            }
	        } else {
	            for (var index in array[i]) {
	                line += array[i][index] + ',';
	            }
	        }

	        line = line.slice(0, -1);
	        str += line + '\r\n';
	    }
	    return str;
	}
}
