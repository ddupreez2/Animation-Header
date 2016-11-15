(function($) {

	/* 
		Colors before reset
		orange - #F8AD43
		red - #F8876E
		green - #73C996
	
		Meter bcg - #c6d7df to #5AB783
		Meter stroke - #7c99a2 to #448962
	*/

	var $body = $('body'),
        
        // TRUCK CODE
        $truck = document.getElementById("Truck"),
        
        // WORD MOVE CODE
        $wordingheigt = document.getElementById("Funoon_District_Text"),
        $wordingheigtcolor = document.getElementById("FUN_Colour"),
        $refresh = document.getElementById("Refresh"),
        $Socialize = document.getElementById("Socialize"),
        $Be_Entertained = document.getElementById("Be_Entertained"),
        
        // FUN WORD CODE
        $F = document.getElementById("Fcolor"), 
        $U = document.getElementById("Ucolor"), 
        $N = document.getElementById("Ncolor"), 
        
        // REFRESH WORD CODE
        $R1 = document.getElementById("R1"),
        $R2 = document.getElementById("R2"),
        $R3 = document.getElementById("R3"),
        $R4 = document.getElementById("R4"),
        $R5 = document.getElementById("R5"),
        $R6 = document.getElementById("R6"),
        $R7 = document.getElementById("R7"),
        $R8 = document.getElementById("R8"),
        
        // SOCIALIZE WORD CODE
        $S1 = document.getElementById("S1"),
        $S2 = document.getElementById("S2"),
        $S3 = document.getElementById("S3"),
        $S4 = document.getElementById("S4"),
        $S5 = document.getElementById("S5"),
        $S6 = document.getElementById("S6"),
        $S7 = document.getElementById("S7"),
        $S8 = document.getElementById("S8"),        
        $S9 = document.getElementById("S9"),
        $S10 = document.getElementById("S10"),
        
        // BE WORD CODE
        $B1 = document.getElementById("B1"),
        $B2 = document.getElementById("B2"), 
        
        // ENTERTAINED WORD CODE
        $E1 = document.getElementById("E1"),
        $E2 = document.getElementById("E2"),
        $E3 = document.getElementById("E3"),
        $E4 = document.getElementById("E4"),
        $E5 = document.getElementById("E5"),
        $E6 = document.getElementById("E6"),
        $E7 = document.getElementById("E7"),
        $E8 = document.getElementById("E8"),        
        $E9 = document.getElementById("E9"),
        $E10 = document.getElementById("E10"),
        $E11 = document.getElementById("E11"),
        $E12 = document.getElementById("E12"),
        
        // WINDOW CODE
        $window1 = document.getElementById("Window_1"),
        $window2 = document.getElementById("Window_2"),
        $window3 = document.getElementById("Window_3"),
        $window4 = document.getElementById("Window_4"),
        $window5 = document.getElementById("Window_5"),
        $window6 = document.getElementById("Window_6"),
        $window7 = document.getElementById("Window_7"), 
         
        
        // MUSIC CODE
        
        $Saxophone = document.getElementById("Saxophone"),
        $waves = document.getElementById("Saxo_waves"),
        $note1 = document.getElementById("Music_Note_1"),
        $note2 = document.getElementById("Music_Note_2"),
        
        // PALETE CODE
        
        $P1 = document.getElementById("P1"),
        $P2 = document.getElementById("P2"),
        $P3 = document.getElementById("P3"),
        $P4 = document.getElementById("P4"),
        $P5 = document.getElementById("P5"),
        $P6 = document.getElementById("P6"),
        
        // PAINT COLOR
        
        $paintcolor = document.getElementById("paletcolor"),
        
        // TREE LEAVES COLOR
        
        $leaves = document.getElementById("treeleaves"),
        
		mainTl = new TimelineMax(),
        mainwindowsTl = new TimelineMax(),
        maintruckTl = new TimelineMax(),
        mainnotesTl = new TimelineMax(),
        mainpaleteTl = new TimelineMax(),
        mainwaveTl = new TimelineMax(),
        mainleavesTl = new TimelineMax(),
        mainlargeTl = new TimelineMax(),
        mainnotes2Tl = new TimelineMax();
    
    
        $F.style.fill = '#fff';
        $U.style.fill = '#fff';
        $N.style.fill = '#fff';
    
        $R1.style.fill = '#fff';
        $R2.style.fill = '#fff';
        $R3.style.fill = '#fff';
        $R4.style.fill = '#fff';
        $R5.style.fill = '#fff';
        $R6.style.fill = '#fff';
        $R7.style.fill = '#fff';
        $R8.style.fill = '#fff';
    
        $S1.style.fill = '#fff';
        $S2.style.fill = '#fff';
        $S3.style.fill = '#fff';
        $S4.style.fill = '#fff';
        $S5.style.fill = '#fff';
        $S6.style.fill = '#fff';
        $S7.style.fill = '#fff';
        $S8.style.fill = '#fff';
        $S9.style.fill = '#fff';
        $S10.style.fill = '#fff';
            
        $B1.style.fill = '#fff';
        $B2.style.fill = '#fff';
    
        $E1.style.fill = '#fff';
        $E2.style.fill = '#fff';
        $E3.style.fill = '#fff';
        $E4.style.fill = '#fff';
        $E5.style.fill = '#fff';
        $E6.style.fill = '#fff';
        $E7.style.fill = '#fff';
        $E8.style.fill = '#fff';
        $E9.style.fill = '#fff';
        $E10.style.fill = '#fff';
        $E11.style.fill = '#fff';
        $E12.style.fill = '#fff';
    
        $window1.style.fill = '#000';
        $window2.style.fill = '#000';
        $window3.style.fill = '#000';
        $window4.style.fill = '#000';
        $window5.style.fill = '#000'; 
        $window6.style.fill = '#000'; 
        $window7.style.fill = '#000'; 
    
        //$paintcolor.style.fill = '#fff';
    
    
    // get everything ready when staring
    
	function clearStage(){
		var clearTl = new TimelineMax();

		clearTl
			.set($truck, {x: -1000, y: 0, scale: 1, transformOrigin: 'center center'})
            .set($wordingheigt, {x: 0, y: 0, transformOrigin: 'center center'})
            .set($wordingheigtcolor, {x: 0.07, y: 0, transformOrigin: 'center center'})
            .set($refresh, {x: 0, y: 0, transformOrigin: 'center center'})
            .set($Socialize, {x: 0, y: 0, transformOrigin: 'center center'})
            .set($Be_Entertained, {x: 0, y: 0, transformOrigin: 'center center'})
            

		return clearTl;
	}  
    
    // Moving of the truck from -900 to 0
    
	function getIdeaTl(){
        
        var ideaTL = new TimelineMax({repeat: -1, repeatDelay: 3});

		ideaTL
            .fromTo($truck, 6, {x: -1150, y: 0, ease:Power0.ease}, {x: -710, y: 0, ease:Power0.easeOut})
            .to($truck, 0.2, {opacity:0})
            .set($truck,{x: -0, y: 0, opacity:0})
            .to($truck, 0.2, {opacity:1})
            .fromTo($truck, 6, {x: -0, y: 0, ease:Power0.ease}, {x: 450, y: 0, ease:Power0.easeOut})
			
		return ideaTL;
        
        
	} 
    
    // Moving of music notes
    
	function getNotesTl(){
        
        var noteTL = new TimelineMax({repeat: -1, repeatDelay: 1});

		noteTL
            .set($note1,{x: -200, y: 600, transformOrigin: 'center center'})
            .fromTo($note1, 1, {x: -0, y: 0}, {x: -0, y: -50})
            .fromTo($note1, 1, {x: -0, y: -50}, {x: -50, y: -80})
            .fromTo($note1, 1, {x: -50, y: -80}, {x: -70, y: -130})
            .to($note1, 1, {opacity:0, ease:Power2.easeOut});
			
		return noteTL;
	}
    
    function getNotes2Tl(){
        
        var note2TL = new TimelineMax({repeat: -1, repeatDelay: 3});

		note2TL
            .to($note2, 1, {rotation: -5, transformOrigin:"left 50%"})
            .to($note2, 1, {rotation: 1, transformOrigin:"left 50%"});
            
			
		return note2TL;
	}
    
    // Color Palate
    
	function getPaleteTl(){
        
        var paleteTL = new TimelineMax({repeat: -1, repeatDelay: 4, yoyo: true});

		paleteTL
            .fromTo($P2, 0.6, {fill: '#7B993D'}, {fill:'#BB2130', immediateRender: true})
            .fromTo($P3, 0.6, {fill: '#7B993D'}, {fill:'#EE8222', immediateRender: true})
            .fromTo($P4, 0.6, {fill: '#7B993D'}, {fill:'#0C75B8', immediateRender: true})
            .fromTo($P5, 0.6, {fill: '#7B993D'}, {fill:'#15A2BD', immediateRender: true})
            .fromTo($P6, 0.6, {fill: '#7B993D'}, {fill:'#92278F', immediateRender: true})        
			
		return paleteTL;
	} 
    
	function getLeavesTl(){
        
        var leavesTL = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});

		leavesTL
            .fromTo($leaves, 1, {fill: '#FACC63'}, {fill:'#BB2130', immediateRender: true})
            .fromTo($leaves, 1, {fill: '#BB2130'}, {fill:'#EE8222', immediateRender: true})
            .fromTo($leaves, 1, {fill: '#EE8222'}, {fill:'#0C75B8', immediateRender: true})
            .fromTo($leaves, 1, {fill: '#0C75B8'}, {fill:'#15A2BD', immediateRender: true})
            .fromTo($leaves, 1, {fill: '#15A2BD'}, {fill:'#92278F', immediateRender: true})        
			
		return leavesTL;
	}     
    
    // Wording Change Color
    
	function getColorTL(){
        
        var wordingTL = new TimelineMax({repeat: -1, repeatDelay: 1});

		wordingTL
            .fromTo($F, 0.6, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true})
            .fromTo($U, 0.6, {fill: '#fff'}, {fill:'#92278F', immediateRender: true})
            .fromTo($N, 0.6, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true})
        
            .fromTo($R1, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
            .fromTo($R2, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
            .fromTo($R3, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
            .fromTo($R4, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
            .fromTo($R5, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
            .fromTo($R6, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
            .fromTo($R7, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
            .fromTo($R8, 0.3, {fill: '#fff'}, {fill:'#BB2130', immediateRender: true ,ease:Power1.ease})
        
            
            .fromTo($S1, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S2, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S3, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S4, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S5, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S6, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S7, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S8, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})        
            .fromTo($S9, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
            .fromTo($S10, 0.3, {fill: '#fff'}, {fill:'#92278F', immediateRender: true ,ease:Power1.ease})
        
            .fromTo($B1, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($B2, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
        
            .fromTo($E1, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($E2, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($E3, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($E4, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($E5, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($E6, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})        
            .fromTo($E7, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($E8, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease}) 
            .fromTo($E9, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease})
            .fromTo($E10, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease}) 
            .fromTo($E11, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease}) 
            .fromTo($E12, 0.3, {fill: '#fff'}, {fill:'#15A2BD', immediateRender: true ,ease:Power1.ease}) 
			
		return wordingTL;
	}  
    
    // Wording Change Color
    
	function getWindowsTL(){
        
        var WindowsTL = new TimelineMax({repeat: -1, repeatDelay: 5, yoyo: true});

		WindowsTL
            .fromTo($window1, 1, {fill: '#000'}, {fill:'#FACC63', immediateRender: true})
            .fromTo($window2, 1, {fill: '#000'}, {fill:'#FACC63', immediateRender: true})
            .fromTo($window3, 1, {fill: '#000'}, {fill:'#FACC63', immediateRender: true})
            .fromTo($window4, 1, {fill: '#000'}, {fill:'#FACC63', immediateRender: true})
            .fromTo($window5, 1, {fill: '#000'}, {fill:'#FACC63', immediateRender: true})
            .fromTo($window6, 1, {fill: '#000'}, {fill:'#FACC63', immediateRender: true})
            .fromTo($window7, 1, {fill: '#000'}, {fill:'#FACC63', immediateRender: true})       
            
			
		return WindowsTL;
	} 
    
    // Music Change
    
	function getMusicTL(){
        
        var MusicTL = new TimelineMax({repeat: -1, repeatDelay: 3});
        
		MusicTL
            .to($Saxophone, 1, {rotation: -5, transformOrigin:"left 50%"})
            .to($Saxophone, 1, {rotation: 1, transformOrigin:"left 50%"});
            
			
		return MusicTL;
	}     
    
    function getMusicWaveTL(){
        
        var MusicWaveTL = new TimelineMax({repeat: -1, repeatDelay: 3});

        var duration = 2;
        
        MusicWaveTL
            .to($waves, 1, {rotation:-5, transformOrigin:"left 50%"})
            .to($waves, 1, {rotation:1, transformOrigin:"left 50%"})
            
			
		return MusicWaveTL;
	}     
    
    
	function init(){

		mainTl
			.add(clearStage())
            .add(getColorTL());
        
        mainwaveTl
            .add(getMusicWaveTL());
        
        mainlargeTl
            .add(getMusicTL());
        
        
        mainwindowsTl
            .add(getWindowsTL());
        
        maintruckTl
            .add(getIdeaTl());
        
        mainnotesTl
            .add(getNotesTl());
        
        
        mainpaleteTl
            .add(getPaleteTl())
            .add(getLeavesTl());
        
        mainleavesTl
            .add(getLeavesTl());
        
        mainnotes2Tl
            .add(getNotes2Tl());
        
	}
	init();    
    

})(jQuery);