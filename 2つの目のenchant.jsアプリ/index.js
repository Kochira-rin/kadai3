enchant(); //encahnt.jsを使うための命令

window.onload = function() {
    var game = new Game(320,480); //このアプリケーションが開かれたときに使う命令文
    
	//bgSurface→Sprite→window　の三段構え
    
    game.onload = function() { 
        var bgSprite = new Sprite(320,480);            //背景画像になるスプライト
     
        var bgSurface = new Surface(320,480);
        bgSurface.context.strokeStyle = 'red';   //線の色の指定
        bgSurface.context.beginPath();		   //描画開始
        bgSurface.context.rect(100,100,150,150); //四角形
		bgSurface.context.moveTo(200,200);       //直線の始点
        bgSurface.context.lineTo(300,300);	   //直線の終点
        bgSurface.context.stroke();			   //描画指示(絵をかけ！)
        
        
        bgSprite.image = bgSurface; //image属性として指定
        
        game.rootScene.addChild(bgSprite); //子として追加
        bgSprite.addEventListener(Event.TOUCH_START.function(event) {
            Event.TOUCH_START.function(event) {
            if(event.x > 160) {	
            	bgSprite.rotate(90);
        	}else{
                bgSprite.rotate(270);
            }
    });
    };
    
    game.start(); //ゲームスタート
    
};