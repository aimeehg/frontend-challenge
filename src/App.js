import DirectoryList from "./ui/components/directory-list/directory-list.component";
import { OFFERS } from "./services/api";

// get the list of offers from
const fetchOffersList = async page => {
    return await OFFERS(page);
};

export default function App() {
    return (
        <>
            <DirectoryList offerList={fetchOffersList} />
        </>
    );
}
