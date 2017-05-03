function create_map(zone, map){
	for(var I=1;I<map.length;I++){//пройти по всем слоям
				//создать слой
		map[I].name=document.createElement('div');
		map[I].name.style="position:absolute;"+
						  "width: " +(map[0].width*map[0].tilewidth)+"px;"+
  						  "height: "+(map[0].height*map[0].tileheight)+"px;";
						  
		zone.appendChild(map[I].name);
		map[I].block=[];
	for(var key in map[I].map){//пройти по всем значениям карты слоя
		var x=0, y=0, xlvl, ylvl, max=map[0].tilesets[0].tilecount;
		var til=document.createElement('div');
		
		for(var n=0;n<map[0].tilesets.length;n++){//пройти по всем тайлам и подобрать необходимый спрайт
			
			
			if(map[I].map[key]==0){
				til.style="position:relative;"+
					  "float:left;"+
					  "height:"+map[0].tilesets[n].tileheight+"px;"+
					  "width:"+map[0].tilesets[n].tilewidth+"px;";
				break;
			}else if(map[I].map[key]>=map[0].tilesets[n].firstgid&&max>=map[I].map[key]){
			
			ylvl=Math.floor((map[I].map[key]-map[0].tilesets[n].firstgid)/map[0].tilesets[n].columns);
			xlvl=map[I].map[key]-(ylvl*map[0].tilesets[n].columns);
			x=((map[0].tilesets[n].tilewidth*(xlvl-1))+map[0].tilesets[n].margin+(map[0].tilesets[n].spacing*(xlvl-1)));
			y=((map[0].tilesets[n].tileheight*(ylvl))+map[0].tilesets[n].margin+(map[0].tilesets[n].spacing*(ylvl)));
			map[I].block.push( til );
			til.style="position:relative;"+
					  "float:left;"+
					  ("height:"+map[0].tilesets[n].tileheight+"px;")+
					  ("width:"+map[0].tilesets[n].tilewidth+"px;")+
					  "background-image: url('"+map[0].tilesets[n].image+"');"+
					  ("background-position: "+-x+"px "+-y+"px;");
			
		
				break;
			}else {
				max+=map[0].tilesets[n+1].tilecount;//если в этом тайле нет необходимого значения переходим к следующиму
			}
		}
		
		map[I].name.appendChild(til);//выводим на экран спрайт в его слое
		
		
		
		
		
		
	  }
	
	
	
	}
	alert("complit");//карта загружена
}
//create_map(game_zone, [{a:1},1,1]);
//[ {name: "",h,w,th,tw,url,map:[]},{}  ]
 

create_map(div_id_game_zone, map_forest);//вывести карту на экран
