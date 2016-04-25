/**
 * Created by david on 16/04/2016.
 */
export namespace Utilities{
    export function getQueryString(querystring:string):Map<string,string>{
        let queryStrings= querystring.substr(1).split("&");
        let queryMap:Map<string,string>=new Map<string,string>();
        for (let quer in queryStrings){
            console.log(queryStrings[quer]);
            let p = queryStrings[quer].split("=");
            queryMap.set(p[0],p[1]);
        }
        return queryMap;
    }

    export function getClassFromValidation(validationObj):string[]{
        let clases:string[]=[];
        if (validationObj.untouched)
            clases.push('label-info');
        else
            if ((validationObj.valid))
                clases.push('label-success');
            else
                clases.push('label-danger');
        return clases;
    }
    
    export var hashOri:string;

}