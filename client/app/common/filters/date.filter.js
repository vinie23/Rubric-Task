 let Datefilter = function(){
        return function( items,from, to ){
            if(from && to){
                var df = from;
                var dt = to;
                var result = [];        
                for (let i=0; i<items.length; i++){
                    let tf = items[i].join_date;
                    console.log(items[i].join_date)
                    if (tf > df && tf < dt)  {
                        result.push(items[i]);
                    }
                }
                return result;
            }else{
                return items;
            }
  };
 }

export default Datefilter;