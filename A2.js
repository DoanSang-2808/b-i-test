function merge2String(s1,s2){
    let Str1 = s1.split("");
    console.log(Str1);
    let Str2 = s2.split("");
    console.log(Str2);
    let result = [];
    let max = Math.max(Str1.length, Str2.length);
    for( let i = 0; i< max; i++){
        result.push(Str1[i]);
        result.push(Str2[i]);
    }
    console.log(result);
    let value = "";
    for( let i = 0; i< Str1.length + Str2.length; i++){
        if(result[i] == undefined){
            i++;
        }
        value += result[i];
    }
    return value;
}
console.log(merge2String("abcd", "123"));