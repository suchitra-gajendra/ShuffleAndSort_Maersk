window.onload=function(){
const gridList = document.getElementById("shuffleAndSortGrids")
const gridListChildren = [...gridList.children]
shuffleGrids = () =>
{
    
  gridListChildren
  .map(a => ({ sort: Math.random(), value: a })) 
  .sort((a, b) => a.sort - b.sort)
  .map( grid => gridList.appendChild(grid.value));
  
  //idea behind the code above is 
 /*  put each element from the htmlCollection into an object and assign an random key - sort
  sort the collection using the key
  extract the value from the object and append it to the gridList */
} 
 sortGrids = () =>
{
	[...gridList.children]
  .sort((a,b)=>a.innerText>b.innerText?1:-1)
  .forEach(grid=>gridList.appendChild(grid));
    
} 
  
document.getElementById("shuffleGrids").onclick = shuffleGrids;
document.getElementById("sortGrids").onclick = sortGrids;
} 