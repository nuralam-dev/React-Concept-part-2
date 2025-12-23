export default function Api (){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>console.log(data));
}
const loadData= async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = res.json();
    return data;
}