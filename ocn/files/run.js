MJL.event.add(window, "load", function(event) {
	MJL.enable.rollover("roll");
    MJL.enable.rollover("button", {disable : "images"});
	MJL.enable.heightEqualizer("equalize");
	MJL.enable.window("popup",{width:"680",height:"700",top:"0",left:"0",toolbar:"no",status:"no"});
	MJL.enable.window("popup02",{width:"820",height:"700",top:"0",left:"0",toolbar:"no",status:"no"});
});