
// Get stadiums
exports.getStadiums = async (req, res, next) => {
    const stadiumList = [
        {id: 1, name: 'Stadium #1', city: 'İZMİR', capacity: 25000},
        {id: 2, name: 'Stadium #2', city: 'İZMİR', capacity: 22000},
        {id: 3, name: 'Stadium #3', city: 'İZMİR', capacity: 16000},
        {id: 4, name: 'Stadium #4', city: 'İZMİR', capacity: 19500},
        {id: 5, name: 'Stadium #5', city: 'İZMİR', capacity: 5300}
    ]
    res.json(stadiumList);
}