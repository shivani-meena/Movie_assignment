function Pagination({ nextPage, prevPage, goToPage, currentPage, totalPages }) {
    return (
      <div className="pagination">
        <button 
          className="pagination-button" 
          onClick={prevPage} 
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className="pagination-button" 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  }
  
export default Pagination;
  