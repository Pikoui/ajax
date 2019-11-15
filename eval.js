document.querySelector("button").addEventListener("click", () => {

    let planets = document.querySelector("input").value;
// On récupère les informations de la SWAPI
    fetch(`https://swapi.co/api/planets/${planets}`)
   
        .then((response) => {
        response.json()
        .then((data) => {
            debugger;
        document.querySelector("main").innerHTML = '';
// On va crée les différentes parties de notre tableau un à un ainsi que leur appartenance
        let table = document.createElement("table");
        document.querySelector("main").appendChild(table);

        let thead = document.createElement("thead");
        table.appendChild(thead);
        
        let tr1 = document.createElement("tr");
        thead.appendChild(tr1);

        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let th4 = document.createElement("th");
        let th5 = document.createElement("th");
        let th6 = document.createElement("th");
        let th7 = document.createElement("th");

        th1.innerHTML = "Name";
        th2.innerHTML = "Diameter";
        th3.innerHTML = "Climate";
        th4.innerHTML = "Gravity";
        th5.innerHTML = "Terrain";
        th6.innerHTML = "Population";
        th7.innerHTML = "surface_water";

        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);
        tr1.appendChild(th4);
        tr1.appendChild(th5);
        tr1.appendChild(th6);
        tr1.appendChild(th7);

        let tbody = document.createElement("tbody");
        table.appendChild(tbody);

        let tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");

// On va affilier aux TD les différentes valeurs trouvés à partir du data de SWAPI

        td1.innerHTML = data.name;
        td2.innerHTML = data.diameter;
        td3.innerHTML = data.climate;
        td4.innerHTML = data.gravity;
        td5.innerHTML = data.terrain;
        td6.innerHTML = data.population;
        td7.innerHTML = data.surface_water;    
    
        
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(td5);
        tr2.appendChild(td6);
        tr2.appendChild(td7);
        })
    })
});