function getAllMatches(allColthes) {

    const showMatch = [];
    allColthes.map((clothes)=> {
        if (clothes.sort === "coat") {
            clothes.matches.map((match)=> {
                showMatch.push({up: clothes.image, down: match});
            });
        }
    });
    return showMatch;
}

module.exports=getAllMatches;