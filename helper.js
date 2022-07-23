function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
    return rows ? rows : null;
}

module.exports = {
    getOffset,
    emptyOrRows
}