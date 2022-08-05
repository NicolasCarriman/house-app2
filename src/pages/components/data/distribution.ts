export type spacesKind = {
    entry: String,
    kitchen: String,
    dining: String,
    bath: String,
    bed: String
}
export type distributionsInterface = {
    south: spacesKind,
    north: spacesKind,
    east: spacesKind,
    west: spacesKind
}

export default <distributionsInterface>{
    south: 
    {
        entry: '3 / 2 / 3 / 4',
        kitchen: '1 / 3 / 1 / 3',
        dining: '2 / 2 / 2 / 4',
        bath: '1 / 2 / 1 / 3',
        bed: '2 / 1 / 4 / 1'
    },
    north : 
    {
        entry: '1 / 1 / 1/ 4',
        kitchen: '1 / 3 / 1 / 3',
        dining: '2 / 1 / 2 / 4',
        bath: '1 / 2 / 1 / 3',
        bed: '3 / 1 / 3 / 3'
    },
    east:
    {
        entry: '1 / 3 / 3 / 4',
        kitchen: '2 / 1 / 4 / 1',
        dining: '1 / 2 / 3 / 2',
        bath: '1 / 1 / 1 / 1',
        bed: '3 / 2 / 3 / 4' 
    },
    west:
    {
        entry: '1 / 1 / 4 / 1',
        kitchen: '1 / 3 / 3 / 3',
        dining: '2 / 2 / 4 / 2',
        bath: '3 / 3 / 3 / 3',
        bed: '1 / 1 / 2 / 1' 
    }
}
