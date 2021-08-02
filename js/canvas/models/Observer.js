function Observer()
{
    this.initBondsObserver = function(_sidecorridor_flag, _w, _h){
        document.getElementById('viewer').contentWindow.initBonds(_sidecorridor_flag, _w, _h);
    }

	this.gridObserver = function(_infos)
	{
		document.getElementById('viewer').contentWindow.drawNewLayoutGrid(_infos);
	}
	
	this.columnObersver = function(_space, _dots)
	{
	    document.getElementById('viewer').contentWindow.drawNewColumn(_space, _dots);
	}
	
	this.undoObserver = function()
	{
		document.getElementById('viewer').contentWindow.actUndo();
	}
	
	this.cancelColumnObserver = function(_data)
	{
		document.getElementById('viewer').contentWindow.actCnacelColumns(_data);
	}

	this.AddBracketsObserver = function (_space, _points) {
	    document.getElementById('viewer').contentWindow.actAddBrackets(_space, _points);
	}

	this.AddWallObserver = function (_data) {
	    document.getElementById('viewer').contentWindow.actAddWall(_data);
	}

	this.AddDoorandWindowObserver = function (_data) {
	    document.getElementById('viewer').contentWindow.actAddDoorandWindow(_data);
	}

	this.AddStairObserver = function (_data) {
	    document.getElementById('viewer').contentWindow.actAddStair(_data);
	}

	this.AddRoofObserver = function (_data) {
	    document.getElementById('viewer').contentWindow.actAddRoof(_data);
	}

	this.exportSTLObserver = function () {
	    document.getElementById('viewer').contentWindow.actExportSTL();
	}
}