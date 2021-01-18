export default function( type, name , history){
    history.push({pathname: "product/"+type+"/"+name });
    history.go(0);
}