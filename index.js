

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
        // console.log(i.idMeal);
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
      <button onclick="onClick('${i.idMeal}')" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Details
</button>
    </div>
    
  </div>

  <section>
  <section id="pop" class="container">
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id ="pic">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</section>
  </section>
  
        `;
        mainDiv.appendChild(newDiv);
    }
}


let onClick = (idmeal) => {
    let url1 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
    // console.log(idmeal);
    fetch(url1)
      .then((res) => res.json())
      .then((data1) => details(data1.meals));
    
    let details = (result) => {
        let staticBackdropLabel = document.getElementById(
          "staticBackdropLabel"
        );
 let pic = document.getElementById("pic");
        for(let i of result){
            console.log(i.strMealThumb);
            staticBackdropLabel.innerText = `Id -  ${i.idMeal}`;
            pic.innerHTML = `
            <img class="img-fluid" src = '${i.strMealThumb}'>
            `;
        }
    }
    

}


let search =() =>{
    let input = document.getElementById("inp-1").value;
    // console.log(input);
    team(input);

};

team('chicken');