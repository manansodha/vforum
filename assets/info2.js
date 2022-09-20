function info2(){

    const f = 'abcdefghijklmnopqrstuvwxy';
    const row = document.createElement("tr");
    const data = document.createElement("td");
    const card = document.createElement("div");
    card.className = "club-card";
    const tumb = document.createElement("div");
    tumb.className = "card-tumb";
    const details = document.createElement("div");
    details.className = "club-details"; 
    const bottom = document.createElement("div");
    bottom.className = "club-bottom";
    const type = document.createElement("span");
    type.className = 'club-type';
    const clb_name = document.createElement('h4');
    const clb_name_link = document.createElement('a');
    const text = document.createElement("p");
    const btn = document.createElement('button');
    btn.id = 'join-btn';
    const image = document.createElement("img");
    image.src = "assets/vitlogo.png";
    tumb.appendChild(image);

    type.textContent = "Language Club";
    clb_name_link.textContent = "Hindi";
    text.textContent = "abcdefghijklmnopqrstuvwxyz";
    btn.textContent = "Join";

    
    data.append(card);
    card.append(tumb);
    card.append(details);
    details.append(type);
    details.append(clb_name);
    clb_name.appendChild(clb_name_link);
    details.append(text);
    details.append(bottom);
    bottom.appendChild(btn);


    const table = document.querySelector("#tech-club");
    for (var i = 0; i<=3; i++){
    
        var x = data.cloneNode(true);
        row.append(x);
    
    } 
    for (var i = 0; i<=1; i++){
    
        var x = row.cloneNode(true);
        table.append(x);
    
    }
}
