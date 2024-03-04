const tracks = [
    { id:1, title:"Dilemma", artist:"Nelly"}, 
    { id:2, title:"Unbelievable", artist:"EMF"}, 
    { id:3, title:"Let me Clear my Throat", artist:"DJ Kool"}, 
    { id:4, title:"Sweet Dreams", artist:"Eurythmics"}, 
    { id:5, title:"Bad Guy / San Francisco", artist:"Dom Dolla / Billie Ellish"}, 
    { id:6, title:"Jumpin', Jumpin'", artist:"Destiny's Child"}, 
    { id:7, title:"It's Tricky", artist:"Run DMC"}, 
    { id:8, title:"My Humps", artist:"Black Eyed Peas"}, 
    { id:9, title:"Hymn for the Weekend", artist:"Coldplay"},
]


export const getChoice = (trackId1, trackId2) => {
    let track1 = {};
    let track2 = {};
    tracks.forEach(element => {
        if (element.id==trackId1) track1 = element;
        if (element.id==trackId2) track2 = element;
    });
    const output = [ track1, track2 ]
    return output;
}
