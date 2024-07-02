function Pagination({ nextPage, prevPage, currentPage, totalPages }) {

    let firstActive = "";
    let secondActive = "";
    let thirdActive = "";
    let firstPage, secondPage, thirdPage;
    if (currentPage == 1) {
        firstPage = 1;
        secondPage = 2;
        thirdPage = 3;
        firstActive = "active";
    }
    else if (currentPage == totalPages) {
        firstPage = totalPages - 2;
        secondPage = totalPages - 1;
        thirdPage = totalPages;
        thirdActive = "active";
    }
    else {
        firstPage = currentPage - 1;
        secondPage = currentPage;
        thirdPage = currentPage + 1;
        secondActive = "active";
    }
    return (
        <div className="pagination">
            <button
                className="pagination-button"
                onClick={prevPage}
                disabled={currentPage === 1}>
                &lt;
            </button>
            <button
                className={`pagination-button ${firstActive}`}>
                {firstPage}
            </button>
            <button
                className={`pagination-button ${secondActive}`}>
                {secondPage}
            </button>
            <button
                className={`pagination-button ${thirdActive}`}>
                {thirdPage}
            </button>
            <button
                className="pagination-button"
                onClick={nextPage}
                disabled={currentPage === totalPages}>
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
