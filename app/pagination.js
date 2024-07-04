function Pagination({ nextPage, prevPage, currentPage, totalPages }) {

    return (
        <div className="pagination">
            <button
                className="pagination-button"
                onClick={prevPage}
                disabled={currentPage === 1}>
                &lt;
            </button>
            <button className="pagination-button active">
                {currentPage}
            </button>
            /
            <button className="pagination-button">
                {totalPages}
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

