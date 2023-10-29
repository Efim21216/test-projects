import React from 'react';
import {getPagesArray} from "../../../utils/Pages";

const Pagination = ({totalPages, changePage, page}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span className={page === p ? 'page page__current' : 'page'}
                      key={p}
                      onClick={() => changePage(p)}
                >{p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;