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
            d3.select(this).attr("x", d.x = d3.event.x)
            d3.select(this).attr("y", d.y = d3.event.y)
            // On déplace le texte
            d3.select(this).select("text")
                .attr("x", d.x = d3.event.x)
                .attr("y", d.y = d3.event.y);
            // On déplace le circle
            d3.select(this).select("circle")
                .attr("cx", d.x = d3.event.x)
                .attr("cy", d.y = d3.event.y);
        })
        // On stop le drag
        .on("end", function (d) {
            d3.select(this).classed("active", false);
        })
    nodes.call(drag);


});
