const a = [765,98,78,0,70,65];
var v = 0;
for(let i = 0; i < a.length**2;i++){
    if(v === a.length-1){
        v = 0;
    }
    if(a[v]>a[v+1]){
        [a[v],a[v+1]] = [a[v+1],a[v]]
    }
    v ++
}console.log(a)
