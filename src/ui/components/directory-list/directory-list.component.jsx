import OffersTable from "../offers-table/offers-table.component";
import ReactPaginate from "react-paginate";

export default function DirectoryList({ offerList, ...props }) {
    // hooks states
    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState([]);

    // runs an api call in order to get the offers list
    useEffect(() => {
        offerList(1)
            .then(res => {
                setData(res.data);
                setLoadingData(false);
            })
            .catch(err => console.log(err));
    }, []);

    // runs an api call for the selected page
    const handlePageClick = page => {
        offerList(page.selected + 1)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="App">
                {loadingData ? (
                    <p>Loading, please wait...</p>
                ) : (
                    <>
                        <OffersTable offers={data} />
                        <div class="pagination-container">
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={data.pages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
