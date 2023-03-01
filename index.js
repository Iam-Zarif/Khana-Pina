

let team = (item) => {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => showDetails(data.meals));
}
let showDetails = (data) => {
    let mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML ='';
    for(let i of data){
        // console.log(i.strMeasure3);
        let newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div class="col">
    <div class="card bg-transparent">
      <img src="${i.strMealThumb}" class="img-fluid card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title text-white">${i.strMeal}</h2>
        <p class="card-text text-white">${i.strMeasure3}</p>
      </div>
      <button onclick="onClick()" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Details
</button>
    </div>
    
  </div>

  <section>
  
  </section>
  
        `;
        mainDiv.appendChild(newDiv);
    }
}


let onClick = () => {
    console.log("ji");
    
    

}


let search =() =>{
    let input = document.getElementById("inp-1").value;
    console.log(input);
    team(input);

};

team('chicken');