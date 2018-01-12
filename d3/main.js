//d3 v4
d3.json("data.json", function(json) {
    // on charge les data du json
    let data = json.data

    // On rajoute la balise générale svg dans le body
    let svg = d3.select("body").append("svg")
        .attr("width", 1000)
        .attr("height", 1000)

    // On bind les data sur les éléments de classe node.
    // Chaque entrée du document sera un node.
    let nodes = svg.selectAll(".node")
        .data(data)
        // Le enter permet de créer les éléments du bind selectAll/data
        .enter()
            // On créé des groupes svg (genre de div vide pour l'instant)
            // positionné au bon endroit à l'aide des datas et de la transformation translate
            .append("g")
            .attr("class","node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    // Pour chaque node, on ajoute un cercle
    nodes.append("circle")
        .attr("r", function(d) {return d.r})
        .style("fill",function(d){return d.color;})
    
    // Pour chaque node, on ajoute du texte
    nodes.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function(d) { return d.name; });

    // Comportement de zoom
    let zoom = d3.zoom()
        .scaleExtent([1, 5])
        .on("zoom", () => {
            svg.attr("transform", d3.event.transform);
        })
    // On applique le zoom sur le svg
    svg.call(zoom);

    // Comportement de drag
    let drag = d3.drag()
        // On dit que le point d'origine du drag est la position actuelle du groupe
        .subject(function() { 
            return {
                x: d3.select(this).attr("x"),
                y: d3.select(this).attr("y")
            };
        })
        // On stoppe la propagation de l'event pour éviter que ça active la fonction zoom
        // On démarre le drag
        .on("start", function (d) {
            d3.event.sourceEvent.stopPropagation();
            d3.select(this).raise().classed("active", true);
        })
        // On déplace le tout
        .on("drag", function (d) {
            // On met à jour la position du groupe
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")"
            })
        })
        // On stop le drag
        .on("end", function (d) {
            d3.select(this).classed("active", false);
        })
    // on applique le drag and drop sur les nodes
    nodes.call(drag);


});
